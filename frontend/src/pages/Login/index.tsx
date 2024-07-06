import React, { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome_prof: "",
    senha_prof: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Simulação de chamada à API para login
      // Substitua pela sua lógica real de autenticação
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        form
      );

      navigate("/home"); // Redireciona para a página inicial após o login
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          console.error("Usuário não encontrado.");
        } else if (status === 401) {
          console.error("Senha incorreta.");
        } else {
          console.error("Erro ao fazer login.");
        }
      } else {
        console.error("Erro ao conectar ao servidor.");
      }
    }
  };

  return (
    <section className="body">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
            value={form.nome_prof}
            name="nome_prof"
            icon={<MdOutlineMailOutline />}
            type="text"
            placeholder="Nome"
          />
          <Input
            onChange={handleInput}
            value={form.senha_prof}
            name="senha_prof"
            icon={<GrSecure />}
            type="password"
            placeholder="Senha"
          />
          <p className="p-have-account">
            Não possui uma conta? <Link to="/register">Cadastrar</Link>
          </p>
          <Button content="Entrar" />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
