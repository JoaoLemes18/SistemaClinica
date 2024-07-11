import React, { ChangeEvent, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./styles.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Interface para definir o estado do formulário
interface FormState {
  cod_prof: string;
  nome_prof: string;
  cod_espec: string;
  senha_prof: string;
  tipo_prof: number;
  status_prof: number;
}

const Register = () => {
  const navigate = useNavigate();

  // Estado para armazenar os dados do formulário
  const [formState, setFormState] = useState<FormState>({
    cod_prof: "",
    nome_prof: "",
    tipo_prof: 1,
    cod_espec: "00", // Valor padrão, pode ser ajustado conforme necessário
    senha_prof: "",
    status_prof: 1,
  });

  // Estado para controlar a habilitação/desabilitação da seleção de especialidade
  const [disableOptions, setDisableOptions] = useState<boolean>(false);

  // Efeito para verificar e atualizar a habilitação/desabilitação da seleção de especialidade
  useEffect(() => {
    if (formState.tipo_prof === 1) {
      setDisableOptions(true); // Desabilita se o tipo de profissional for administrativo
    } else {
      setDisableOptions(false); // Habilita para outros tipos de profissional
    }
  }, [formState.tipo_prof]);

  // Função para lidar com mudanças nos inputs do formulário
  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value }); // Atualiza o estado do formulário conforme o input muda
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica para garantir que todos os campos obrigatórios sejam preenchidos
    if (
      !formState.cod_prof ||
      !formState.nome_prof ||
      !formState.cod_espec ||
      !formState.tipo_prof ||
      !formState.senha_prof ||
      !formState.status_prof
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Constrói o objeto de dados a ser enviado para a API
      const requestData = {
        cod_prof: formState.cod_prof,
        nome_prof: formState.nome_prof,
        cod_espec: formState.cod_espec,
        tipo_prof: Number(formState.tipo_prof),
        senha_prof: formState.senha_prof,
        status_prof: Number(formState.status_prof),
      };

      // Simula o envio dos dados para o servidor (substitua por chamada real à API)
      await axios.post("http://localhost:3000/auth/register", requestData);

      // Simula resposta de sucesso (substitua pelo tratamento real da resposta)
      const fakeResponse = { data: requestData };
      localStorage.setItem("userData", JSON.stringify(fakeResponse.data));

      toast.success(`Usuário cadastrado com sucesso!`);

      // Navega para a página de login após o cadastro
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
          {/* Inputs para código e nome do profissional */}
          <Input
            onChange={handleInput}
            value={formState.cod_prof}
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
            {/* Input para senha */}
            <Input
              onChange={handleInput}
              value={formState.senha_prof}
              name="senha_prof"
              type="password"
              placeholder="Senha"
            />
          </div>

          <div className="input-group">
            {/* Dropdown para selecionar tipo de profissional */}
            <label>Tipo do profissional</label>
            <select
              onChange={handleInput}
              value={formState.tipo_prof}
              name="tipo_prof"
            >
              <option value="1">Administrativo</option>
              <option value="2">Estagiário</option>
              <option value="3">Supervisor</option>
              <option value="4">Master</option>
            </select>

            {/* Dropdown para selecionar status do profissional */}
            <label>Status do profissional</label>
            <select
              onChange={handleInput}
              value={formState.status_prof}
              name="status_prof"
            >
              <option value="1">Ativo</option>
              <option value="2">Inativo</option>
              <option value="3">Suspenso</option>
            </select>

            {/* Dropdown para selecionar especialidade do profissional */}
            <label>Especialidade do Profissional</label>
            <select
              onChange={handleInput}
              value={formState.cod_espec}
              name="cod_espec"
              disabled={disableOptions}
            >
              <option value="00">00 - Biomedicina</option>
              <option value="20">20 - Estética e Cosmetologia</option>
              <option value="30">30 - Fisioterapia</option>
              <option value="40">40 - Nutrição</option>
              <option value="50">50 - Odontologia</option>
              <option value="70">70 - Psicologia</option>
              <option value="80">80 - NPJ</option>
              <option value="90">90 - Medicina</option>
            </select>
          </div>
          {/* Link para página de login e botão de cadastro */}
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
