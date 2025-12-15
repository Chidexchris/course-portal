import React, { useState } from 'react'
import Sidebar from '../../includes/Sidebar'
import Header from '../../includes/Header'


function Courses() {

  const [courses] = useState([
    { id: 1, code: "CST101", title: "Intro to Computer Science", unit: 3 },
    { id: 2, code: "MTH102", title: "Calculus I", unit: 4 },
    { id: 3, code: "ENG105", title: "Use of English I", unit: 2 },
  ]);

  const handleRegister = (course) => {
    console.log("Registered:", course);
    // You will later:
    // - Save to Turso table registrations
    // - Update UI
  };
  return (
    <>
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
        data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div class="body-wrapper">
          <Header />
          <div class="body-wrapper-inner" >
            <div className="container-fluid">
              <h4 className="mb-3">Available Courses</h4>

              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Course Code</th>
                      <th>Course Title</th>
                      <th>Unit</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {courses.map((course, index) => (
                      <tr key={course.id}>
                        <td>{index + 1}</td>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.unit}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleRegister(course)}
                          >
                            Register
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses