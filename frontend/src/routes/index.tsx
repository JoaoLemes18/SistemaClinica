import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Health from "../pages/Health";
import Admin from "../pages/Administrativo";
import Agenda from "../pages/Agenda";
import CadastroEspec from "../pages/CadastroEspec/index.js";
import CadastroProce from "../pages/CadastroProce/index.js";
import Secretary from "../pages/Secretaria/index.js";
import NPJ from "../pages/NPJ";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: React.FC = () => {
  const isAuthenticated = localStorage.getItem("userData") !== null;

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated} element={<Home />} />
        }
      />
      <Route
        path="/health"
        element={
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            element={<Health />}
          />
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated} element={<Admin />} />
        }
      />
      <Route
        path="/secretary"
        element={
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            element={<Secretary />}
          />
        }
      />
      <Route
        path="/agenda"
        element={
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            element={<Agenda />}
          />
        }
      />
      <Route
        path="/agenda/cadastro-de-especialidade"
        element={
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            element={<CadastroEspec />}
          />
        }
      />
      <Route
        path="/agenda/cadastro-de-procedimento"
        element={
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            element={<CadastroProce />}
          />
        }
      />
      <Route
        path="/npj"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated} element={<NPJ />} />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
