import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Health from "../pages/Health";
import Admin from "../pages/Administrativo";
import Agenda from "../pages/Agenda";
import Secretary from "../pages/Secretaria/index.js";
import NPJ from "../pages/NPJ";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/health" element={<Health />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/secretary" element={<Secretary />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/npj" element={<NPJ />} />
    </Routes>
  );
};

export default AppRoutes;
