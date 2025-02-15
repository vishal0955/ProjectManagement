// src/routes/RoleBasedRoutes.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import EmployeePage from "../Pages/Admin/EmployeeList";
import EmployeeProfile from "../Pages/Admin/EmployeeProfile";


import ProductionDashboard from "../Pages/Productionteam/ProductionDashboard";
import DesignerDashboard from "../Pages/Designer/Dashboard";
// import Unauthorized from "../pages/Auth/Unauthorized"; // Page for unauthorized access
import ProjectManagementDashboard from "../Pages/ProjectOwner/ProjectManagementDashboard";

const RoleBasedRoutes = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin/manage-users" element={<ManageUsers />} /> */}
        <Route path="/admin/employeelist" element={<EmployeePage />} />
        <Route path="/admin/employeeprofile" element={<EmployeeProfile />} />
      </Route>

      {/* Project Owner Routes */}
      <Route element={<PrivateRoute allowedRoles={["project_owner"]} />}>
        <Route path="/project-owner/dashboard" element={<ProjectManagementDashboard />} />
        {/* <Route path="/project-owner/projects" element={<Projects />} /> */}
      </Route>

      {/* Production Team Routes */}
      <Route element={<PrivateRoute allowedRoles={["production_team"]} />}>
        <Route path="/production/dashboard" element={<ProductionDashboard />} />
        {/* <Route path="/production/jobs" element={<Jobs />} /> */}
      </Route>

      {/* Designer Routes */}
      <Route element={<PrivateRoute allowedRoles={["designer"]} />}>
        <Route path="/designer/dashboard" element={<DesignerDashboard />} />
        {/* <Route path="/designer/tasks" element={<MyTasks />} /> */}
      </Route>

      {/* Unauthorized Access Page */}
      {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
    </Routes>
  );
};

export default RoleBasedRoutes;
