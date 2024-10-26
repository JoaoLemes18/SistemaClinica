import React, { useState, ChangeEvent } from "react";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

const CadastroEspec = () => {
  // Estado para armazenar os dados da especialidade
  const [especialidadeData, setEspecialidadeData] = useState({
    cod_especialidade: "",
    especialidade: "",
  });

  // Função para lidar com a mudança dos inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Se o campo for 'cod_especialidade', apenas números são permitidos
    if (name === "cod_especialidade" && !/^\d*$/.test(value)) {
      // Se o valor não for um número, não atualize o estado
      return;
    }

    // Atualiza o estado com o valor válido
    setEspecialidadeData({ ...especialidadeData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica (opcional)
    if (
      !especialidadeData.cod_especialidade ||
      !especialidadeData.especialidade
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Salvar no localStorage
    localStorage.setItem(
      "especialidadeData",
      JSON.stringify(especialidadeData)
    );

    // Opcional: Limpar o formulário após o envio
    setEspecialidadeData({ cod_especialidade: "", especialidade: "" });

    // Opcional: Notificar o usuário
    alert("Especialidade cadastrada com sucesso!");
  };

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
    </section>
  );
};

export default CadastroEspec;
