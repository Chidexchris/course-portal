import express from "express";
import db from "../db.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

/* VIEW ALL COURSES */
router.get("/", auth, async (req, res) => {
  try {
    const result = await db.execute("SELECT * FROM courses");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

/* REGISTER COURSE */
router.post("/:id/register", auth, async (req, res) => {
  const course_id = req.params.id;

  try {
    // Check for duplicate registration
    const exists = await db.execute({
      sql: "SELECT * FROM registrations WHERE user_id=? AND course_id=?",
      args: [req.user.id, course_id],
    });

    if (exists.rows.length) {
      return res.status(400).json({ message: "Already registered" });
    }

    // Register course
    await db.execute({
      sql: "INSERT INTO registrations (user_id, course_id, status) VALUES (?, ?, 'pending')",
      args: [req.user.id, course_id],
    });

    res.json({ message: "Course registered (pending approval)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

/* VIEW MY REGISTRATIONS */
router.get("/my", auth, async (req, res) => {
  try {
    const result = await db.execute({
      sql: `
        SELECT r.id, c.code, c.title, c.unit, r.status
        FROM registrations r
        JOIN courses c ON c.id = r.course_id
        WHERE r.user_id=?
      `,
      args: [req.user.id],
    });

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

/* DROP COURSE */
router.delete("/:id/drop", auth, async (req, res) => {
  try {
    await db.execute({
      sql: "DELETE FROM registrations WHERE id=? AND user_id=?",
      args: [req.params.id, req.user.id],
    });

    res.json({ message: "Course dropped successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

export default router;
