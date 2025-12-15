const BASE = "/.netlify/functions";

async function request(endpoint, options = {}) {
  const user = window.netlifyIdentity.currentUser();
  const token = user ? await user.jwt() : null;

  const res = await fetch(`${BASE}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  getCourses: () => request("get-courses"),
  registerCourse: (courseId) =>
    request("register-course", {
      method: "POST",
      body: JSON.stringify({ courseId }),
    }),
  myRegistrations: () => request("my-registrations"),
  dropRegistration: (id) =>
    request("drop-registration", {
      method: "POST",
      body: JSON.stringify({ id }),
    }),
};
