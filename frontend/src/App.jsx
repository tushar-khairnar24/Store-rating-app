import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based routes */}
        <Route
          path="/admin-dashboard"
          element={role === "ADMIN" ? <AdminDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/user-dashboard"
          element={role === "USER" ? <UserDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/store-owner-dashboard"
          element={role === "STORE_OWNER" ? <StoreOwnerDashboard /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;