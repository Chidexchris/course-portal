import express from "express";
import  db  from "../db.js";
import { auth, adminOnly } from "../middleware/auth.js";

const router = express.Router();

/* ADD COURSE */
router.post("/courses", auth, adminOnly, async (req, res) => {
  const { code, title, unit } = req.body;

  await db.execute({
    sql: `INSERT INTO courses (code, title, unit) VALUES (?, ?, ?)`,
    args: [code, title, unit],
  });

  res.json({ message: "Course added" });
});

/* VIEW PENDING */
router.get("/pending", auth, adminOnly, async (req, res) => {
  const result = await db.execute(`
    SELECT r.id, u.name, u.email, c.title, c.unit
    FROM registrations r
    JOIN users u ON u.id = r.user_id
    JOIN courses c ON c.id = r.course_id
    WHERE r.status = 'pending'
  `);

  res.json(result.rows);
});

/* APPROVE */
router.put("/approve/:id", auth, adminOnly, async (req, res) => {
  await db.execute({
    sql: `UPDATE registrations SET status='approved' WHERE id=?`,
    args: [req.params.id],
  });

  res.json({ message: "Approved" });
});


/**
 * GET ALL USERS WITH COURSE COUNT
 */
router.get("/users", auth, adminOnly, async (req, res) => {
  try {
    const result = await db.execute({
      sql: `
        SELECT 
          u.id,
          u.name,
          u.email,
          u.role,
          COUNT(r.id) AS course_count
        FROM users u
        LEFT JOIN registrations r ON r.user_id = u.id
        GROUP BY u.id
        ORDER BY u.name
      `,
    });

    res.json(result.rows);
  } catch (err) {
    console.error("ADMIN USERS ERROR:", err);
    res.status(500).json({ message: "Failed to load users" });
  }
});
export default router;
