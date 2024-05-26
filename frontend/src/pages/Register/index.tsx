import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./styles.scss";

interface FormState {
  [key: string]: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({});

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/auth/register", form);
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="card">
        <form className="form" onSubmit={handleSubmit} method="post">
          <h2>CRIA SUA CONTA</h2>
          <Input
            label="Email:"
            type="email"
            onChange={handleInput}
            value={form.email}
          />
          <Input
            label="Senha:"
            type="password"
            onChange={handleInput}
            value={form.email}
          />
          <Input
            label="Confirme sua senha:"
            type="password"
            onChange={handleInput}
            value={form.email}
          />

          <div className="button-group">
            <Button text="CADASTRAR" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
