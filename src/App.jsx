// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleBasedRoutes from "./Routes/RoleBasedRoute";

import Login from "./Pages/authtication/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<RoleBasedRoutes />} /> {/* All role-based routes */}
      </Routes>
    </Router>
  );
}

export default App;
