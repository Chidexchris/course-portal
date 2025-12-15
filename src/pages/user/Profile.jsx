import React from "react";
import Sidebar from '../../includes/Sidebar'
import Header from '../../includes/Header'

function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Computer Science",
    studentId: "STD2025001",
    phone: "+234 901 234 5678",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=4e73df&color=fff&size=128"
  };

  return (

    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
        data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div className="body-wrapper">
          <Header />

          <div class="body-wrapper-inner" >
            <div className="container-fluid">
    <div className="container mt-4">
      <h4 className="mb-4">My Profile</h4>

      <div className="row">
        {/* Profile Info Card */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <img
              src={user.avatar}
              alt="profile"
              className="rounded-circle mb-3"
              width="120"
              height="120"
            />

            <h5>{user.name}</h5>
            <p className="text-muted">{user.email}</p>

            <button className="btn btn-primary btn-sm w-100 mt-2">
              Edit Profile
            </button>
            <button className="btn btn-outline-secondary btn-sm w-100 mt-2">
              Change Password
            </button>
            <button className="btn btn-danger btn-sm w-100 mt-2">
              Logout
            </button>
          </div>
        </div>

        {/* Details Card */}
        <div className="col-md-8">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Account Details</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Full Name:</strong>
                <p>{user.name}</p>
              </div>

              <div className="col-md-6">
                <strong>Email Address:</strong>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Department:</strong>
                <p>{user.department}</p>
              </div>

              <div className="col-md-6">
                <strong>Student ID:</strong>
                <p>{user.studentId}</p>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <strong>Phone Number:</strong>
                <p>{user.phone}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Profile;
