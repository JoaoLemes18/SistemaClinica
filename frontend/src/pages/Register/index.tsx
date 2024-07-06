import React, { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "../../styles/Login&SignPage.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  cod_prof?: string;
  nome_prof: string;
  tipo_prof: number;
  senha_prof: string;
  status_prof: number; // Adicionado status_prof ao FormState
}

const Register = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    cod_prof: "",
    nome_prof: "",
    tipo_prof: 1, // Inicializa com o primeiro valor do select
    senha_prof: "",
    status_prof: 1, // Inicializa com o primeiro valor de status
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
      !formState.nome_prof ||
      !formState.tipo_prof ||
      !formState.senha_prof ||
      !formState.status_prof // Verifica também o status_prof
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const requestData = {
        cod_prof: formState.cod_prof,
        nome_prof: formState.nome_prof,
        tipo_prof: Number(formState.tipo_prof),
        senha_prof: formState.senha_prof,
        status_prof: Number(formState.status_prof), // Inclui status_prof no requestData
      };

      await axios.post("http://localhost:3000/auth/register", requestData);

      toast.success(`Usuário cadastrado com sucesso!`);
      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError;
        console.error("Erro ao cadastrar usuário:", error.response?.data);
        toast.error(
          "Erro ao cadastrar usuário. Verifique os dados e tente novamente."
        );
      } else {
        console.error("Erro desconhecido ao cadastrar usuário:", err);
        toast.error("Erro desconhecido ao cadastrar usuário.");
      }
    }
  };

  return (
    <section className="body">
      <div className="form-container">
        <form onSubmit={handleSubmit} method="post">
          <Input
            onChange={handleInput}
            value={formState.cod_prof || ""}
            name="cod_prof"
            type="text"
            placeholder="Código"
          />
          <Input
            onChange={handleInput}
            value={formState.nome_prof}
            name="nome_prof"
            type="text"
            placeholder="Nome"
          />
          <div className="input-group">
            <Input
              onChange={handleInput}
              value={formState.senha_prof}
              name="senha_prof"
              type="password"
              placeholder="Senha"
            />
          </div>

          <div className="input-group">
            <label>Tipo do profissional</label>
            <select
              onChange={handleInput}
              value={formState.tipo_prof}
              name="tipo_prof"
            >
              <option value="1">Administrativo</option>
              <option value="2">Técnico Básico</option>
              <option value="3">Técnico Supervisor</option>
              <option value="4">Master</option>
            </select>

            <label>Status do profissional</label>
            <select
              onChange={handleInput}
              value={formState.status_prof}
              name="status_prof"
            >
              <option value="1">Ativo</option>
              <option value="2">Inativo</option>
              <option value="3">Pendente</option>
            </select>
          </div>
          <p className="p-have-account">
            Já possui uma conta? <Link to="/login">Login</Link>{" "}
          </p>
          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default Register;
