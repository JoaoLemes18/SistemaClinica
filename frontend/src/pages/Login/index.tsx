import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/userSlice";
import { loginUser } from "../../utils/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./styles.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    cod_prof: "",
    senha_prof: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = await loginUser(form);

      if (userData.cod_prof && userData.nome_prof) {
        localStorage.setItem("userData", JSON.stringify(userData));

        dispatch(
          setUser({
            cod_prof: userData.cod_prof,
            nome_prof: userData.nome_prof,
            cod_espec: userData.cod_espec,
            tipo_prof: userData.tipo_prof,
          })
        );

        navigate(`/home?tipo_prof=${userData.tipo_prof}`);
      } else {
        toast.error("Dados de usuário incompletos na resposta do servidor.");
      }
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          toast.error("Usuário não encontrado.");
        } else if (status === 422) {
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
    <section className="login-body">
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
            value={form.cod_prof}
            name="cod_prof"
            type="text"
            placeholder="Código"
          />
          <Input
            onChange={handleInput}
            value={form.senha_prof}
            name="senha_prof"
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
