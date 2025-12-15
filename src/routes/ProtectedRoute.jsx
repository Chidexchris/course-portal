import { Navigate } from "react-router-dom";
import { getCurrentUser, getUserRole } from "../utils/auth";

function ProtectedRoute({ children, role }) {
  const user = getCurrentUser();

  // 1️⃣ Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2️⃣ Role check (optional)
  if (role) {
    const userRole = getUserRole();
    if (userRole !== role) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;
