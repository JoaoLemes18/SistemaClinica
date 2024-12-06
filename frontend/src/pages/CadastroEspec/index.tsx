import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios"; // Para fazer requisições HTTP
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.scss";

// Definindo tipos para os estados
interface Especialidade {
  cod_especialidade: string;
  especialidade: string;
}

const CadastroEspec: React.FC = () => {
  // Estado para armazenar os dados da especialidade
  const [especialidadeData, setEspecialidadeData] = useState<Especialidade>({
    cod_especialidade: "",
    especialidade: "",
  });

  // Estado para armazenar as especialidades cadastradas
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  // Função para lidar com a mudança dos inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Se o campo for 'cod_especialidade', apenas números são permitidos
    if (name === "cod_especialidade" && !/^\d*$/.test(value)) {
      return;
    }

    setEspecialidadeData({ ...especialidadeData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !especialidadeData.cod_especialidade ||
      !especialidadeData.especialidade
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Envia a especialidade para o backend
      const response = await axios.post(
        "http://localhost:3000/especialidades",
        especialidadeData
      );

      // Atualiza a lista de especialidades após o cadastro
      setEspecialidades((prev) => [...prev, response.data]);

      // Limpa o formulário
      setEspecialidadeData({ cod_especialidade: "", especialidade: "" });

      alert("Especialidade cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar especialidade:", error);
      alert("Erro ao cadastrar especialidade.");
    }
  };

  // Função para carregar as especialidades ao carregar o componente
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get<Especialidade[]>(
          "http://localhost:3000/especialidades"
        );
        setEspecialidades(response.data);
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    };

    fetchEspecialidades();
  }, []);

  return (
    <section className="body">
      <div className="botaovoltar">
        <ButtonBack to="/agenda">Voltar</ButtonBack>
      </div>
      <div className="titulo">
        <Title>Cadastro de Especialidade</Title>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Input
            name="cod_especialidade"
            type="text"
            placeholder="Código da especialidade"
            value={especialidadeData.cod_especialidade}
            onChange={handleInputChange}
          />
          <Input
            name="especialidade"
            type="text"
            placeholder="Especialidade"
            value={especialidadeData.especialidade}
            onChange={handleInputChange}
          />
          <Button content="Cadastrar" />
        </form>
      </div>

      <div>
        <label htmlFor="especialidadeSelect">
          Selecione uma especialidade:
        </label>
        <select id="especialidadeSelect">
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
    </section>
  );
};

export default CadastroEspec;
