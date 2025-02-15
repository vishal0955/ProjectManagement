// src/layout/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" /> 
      <div className="flex-grow">
        <Navbar />
        <div className="p-4">
          <Outlet /> {/* Loads Admin Pages */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

