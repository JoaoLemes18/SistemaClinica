import React, { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import "../../styles/Login&SignPage.scss";
import { toast } from "react-toastify";

interface FormState {
  nome_prof: string;
  senha_prof: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
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
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        form
      );

      const token = response.data.token;
      document.cookie = `userToken=${token};`;

      // Exibe mensagem de sucesso ao usuário
      toast.success("Usuário logado com sucesso!");

      navigate("/home");
    } catch (err: unknown) {
      const error = err as AxiosError;

      if (error.response) {
        const { status, data } = error.response;
        if (status === 404) {
          toast.error("Usuário não encontrado.");
        } else if (status === 401) {
          toast.error("Senha incorreta.");
        } else {
          toast.error("Erro ao fazer login.");
        }
      } else {
        toast.error("Erro ao conectar ao servidor.");
      }
    }
  };

  return (
    <section className="body">
      <h1>
        <span>Bem-Vindo </span> <br /> a Fasiclin.
      </h1>
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
          Não possui uma conta? <Link to="/register">Cadastrar</Link>{" "}
        </p>
        <Button content="Entrar" />
      </form>
    </section>
  );
};

export default LoginPage;
