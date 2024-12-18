import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormState } from "../../utils/interface/FormState";
import { registerUser } from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios"; // Para fazer requisições
import "./styles.scss";

const Register = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<FormState>({
    cod_prof: "",
    nome_prof: "",
    tipo_prof: 1,
    cod_espec: "00",
    senha_prof: "",
    status_prof: 1,
  });

  const [disableOptions, setDisableOptions] = useState<boolean>(false);
  const [especialidades, setEspecialidades] = useState<any[]>([]); // Estado para armazenar as especialidades

  useEffect(() => {
    // Função para carregar as especialidades
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/especialidades"
        );
        setEspecialidades(response.data); // Atualiza o estado com as especialidades do backend
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    };

    fetchEspecialidades();
  }, []);

  useEffect(() => {
    setDisableOptions(formState.tipo_prof === 1);
  }, [formState.tipo_prof]);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      const response = await registerUser({
        cod_prof: formState.cod_prof,
        nome_prof: formState.nome_prof,
        cod_espec: formState.cod_espec,
        tipo_prof: Number(formState.tipo_prof),
        senha_prof: formState.senha_prof,
        status_prof: Number(formState.status_prof),
      });

      localStorage.setItem("userData", JSON.stringify(response));
      toast.success(`Usuário cadastrado com sucesso!`);
      navigate("/login");
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
      toast.error(
        "Erro ao cadastrar usuário. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <section className="body">
      <div className="form-container">
        <form onSubmit={handleSubmit} method="post">
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
              <option value="2">Estagiário</option>
              <option value="3">Supervisor</option>
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
              <option value="3">Suspenso</option>
            </select>
            <label>Especialidade do Profissional</label>
            <select
              onChange={handleInput}
              value={formState.cod_espec}
              name="cod_espec"
              disabled={disableOptions}
            >
              {/* Especialidades dinâmicas carregadas da API */}
              {especialidades.map((especialidade) => (
                <option
                  key={especialidade.cod_especialidade}
                  value={especialidade.cod_especialidade}
                >
                  {`${especialidade.cod_especialidade} - ${especialidade.especialidade}`}
                </option>
              ))}
            </select>
          </div>
          <p className="p-have-account">
            Já possui uma conta? <Link to="/login">Login</Link>
          </p>
          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default Register;
