import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    if (!window.netlifyIdentity) return;

    window.netlifyIdentity.on("login", user => {
      const role = user.app_metadata?.roles?.[0];

      if (role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/courses";
      }
    });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center">
        <div className="card col-md-6 col-lg-4">
          <div className="card-body">
            <Link to="/" className="text-center d-block mb-3">
              <img src="../assets/images/logos/logo.svg" alt="logo" />
            </Link>

            <p className="text-center">Sign in to your account</p>

            <button
              className="btn btn-primary w-100"
              onClick={() => window.netlifyIdentity.open("login")}
            >
              Sign In
            </button>

            <div className="text-center mt-3">
              <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
