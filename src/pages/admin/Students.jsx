import React, { useEffect, useState } from "react";
import Sidebar from "../../includes/Sidebar";
import Header from "../../includes/Header";
import axios from "axios";
import { getToken } from "../../utils/auth";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://courson.up.railway.app/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      );
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Sidebar />

      <div className="body-wrapper">
        <Header />

        <div className="container-fluid">
          <h4 className="mb-3">All Users</h4>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Registered Courses</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u, index) => (
                    <tr key={u.id}>
                      <td>{index + 1}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <span
                          className={`badge ${
                            u.role === "admin"
                              ? "bg-danger"
                              : "bg-primary"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-success">
                          {u.course_count}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
