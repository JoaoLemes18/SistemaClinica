import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CrudUsers from "../pages/CrudUsers";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/listUsers" element={<CrudUsers />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
