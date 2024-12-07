import React, { useState, useEffect, ChangeEvent } from "react";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axios from "axios"; // Para fazer requisições

import "./styles.scss";

const CadastroProce = () => {
  // Estado para armazenar os dados do procedimento
  const [procedimentoData, setProcedimentoData] = useState({
    cod_proced: "",
    descr_proced: "",
    val_proced: "",
    cod_espec: "",
  });

  const [especialidades, setEspecialidades] = useState<any[]>([]); // Estado para armazenar as especialidades

  // Função para carregar as especialidades do banco de dados
  useEffect(() => {
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
  }, []); // A dependência vazia [] garante que a requisição seja feita apenas uma vez

  // Função para lidar com a mudança dos inputs e selects
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Permitir apenas números para o código do procedimento
    if (name === "cod_proced") {
      const formattedCode = value.replace(/[^\d]/g, ""); // Permitir apenas dígitos
      setProcedimentoData({ ...procedimentoData, [name]: formattedCode });
    }

    // Se o campo for 'val_proced', permitir apenas números e o símbolo de R$
    else if (name === "val_proced") {
      const formattedValue = value
        .replace(/[^\d,]/g, "") // Permitir apenas dígitos e vírgula
        .replace(/(,.*?),(.*)?/g, "$1"); // Permitir apenas uma vírgula

      setProcedimentoData({ ...procedimentoData, [name]: formattedValue });
    } else {
      // Atualiza o estado normalmente para os outros campos
      setProcedimentoData({ ...procedimentoData, [name]: value });
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (
      !procedimentoData.descr_proced ||
      !procedimentoData.val_proced ||
      !procedimentoData.cod_espec
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Faz a requisição para o backend
      const response = await fetch("http://localhost:3000/procedimentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descr_proced: procedimentoData.descr_proced,
          val_proced: parseFloat(procedimentoData.val_proced.replace(",", ".")),
          cod_espec: procedimentoData.cod_espec,
        }),
      });

      if (response.ok) {
        alert("Procedimento cadastrado com sucesso!");

        // Limpar o formulário após o envio
        setProcedimentoData({
          cod_proced: "",
          descr_proced: "",
          val_proced: "",
          cod_espec: "",
        });
      } else {
        const errorData = await response.json();
        alert(
          `Erro: ${
            errorData.error || "Não foi possível cadastrar o procedimento."
          }`
        );
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <section className="body">
      <div className="botaovoltar">
        <ButtonBack to="/agenda">Voltar</ButtonBack>
      </div>
      <div className="titulo">
        <Title>Cadastro de Procedimento</Title>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Input
            name="cod_proced"
            type="text"
            placeholder="Código Procedimento"
            value={procedimentoData.cod_proced}
            onChange={handleInputChange}
          />

          <Input
            name="descr_proced"
            type="text"
            placeholder="Descrição do Procedimento"
            value={procedimentoData.descr_proced}
            onChange={handleInputChange}
          />
          <Input
            name="val_proced"
            type="text"
            placeholder="Valor do Procedimento (R$)"
            value={procedimentoData.val_proced}
            onChange={handleInputChange}
          />

          {/* Campo select para especialidade, agora com as especialidades carregadas do banco */}
          <select
            name="cod_espec"
            value={procedimentoData.cod_espec}
            onChange={handleInputChange}
          >
            <option value="">Selecione a especialidade</option>
            {especialidades.map((especialidade) => (
              <option
                key={especialidade.cod_especialidade}
                value={especialidade.cod_especialidade}
              >
                {`${especialidade.cod_especialidade} - ${especialidade.especialidade}`}
              </option>
            ))}
          </select>

          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default CadastroProce;
