// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; 

const PrivateRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem("role");
  console.log(role);
  // const { user } = useAuth(); // Get user info from Auth Context

  // if (!user) return <Navigate to="/login" replace />; // Redirect if not logged in

  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;
