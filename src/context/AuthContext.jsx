import { createContext, useContext, useState, useEffect } from "react";

// Dummy credentials for demonstration
const dummyUsers = {
  "admin@example.com": { role: "admin", password: "admin123" },
  "designer@example.com": { role: "designer", password: "designer123" },
  "projectmanager@example.com": { role: "projectmanager", password: "projectmanager123" },
  "productionteam@example.com": { role: "productionteam", password: "productionteam123" },
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dummyUsers[email] && dummyUsers[email].password === password) {
          const loggedInUser = { email, role: dummyUsers[email].role };
          setUser(loggedInUser);
          localStorage.setItem("user", JSON.stringify(loggedInUser));
          resolve(loggedInUser.role);
        } else {
          reject(new Error("Invalid email or password!"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
