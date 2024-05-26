// src/pages/Login.tsx
import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./styles.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de login
    console.log("Login:", { email, password });
  };

  return (
    <div className="container">
      <div className="card">
        <form className="form">
          <h2>LOGIN</h2>
          <Input
            label="Email:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-group">
            <Button text="ENTRAR" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
