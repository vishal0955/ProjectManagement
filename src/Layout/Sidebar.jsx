// src/layout/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" },
      { name: "Manage Users", path: "/admin/manage-users" },
    ],
    project_owner: [
      { name: "Dashboard", path: "/project-owner/dashboard" },
      { name: "Projects", path: "/project-owner/projects" },
    ],
    production_team: [
      { name: "Dashboard", path: "/production/dashboard" },
      { name: "Jobs", path: "/production/jobs" },
    ],
    designer: [
      { name: "Dashboard", path: "/designer/dashboard" },
      { name: "My Tasks", path: "/designer/tasks" },
    ],
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <nav>
        {menuItems[role].map((item, index) => (
          <Link key={index} to={item.path} className="block py-2 px-4 hover:bg-gray-700">
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
