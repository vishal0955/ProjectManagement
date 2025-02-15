// src/layout/ProjectOwnerLayout.jsx
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const ProjectOwnerLayout = () => {
  return (
    <div className="flex">
      <Sidebar role="project_owner" />
      <div className="flex-grow">
        <Navbar />
        <div className="p-4">
          <Outlet /> {/* Loads Project Owner Pages */}
        </div>
      </div>
    </div>
  );
};

export default ProjectOwnerLayout;
