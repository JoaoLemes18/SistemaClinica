import React, { useState, ChangeEvent } from "react";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

const CadastroProce = () => {
  // Estado para armazenar os dados do procedimento
  const [procedimentoData, setProcedimentoData] = useState({
    cod_proced: "",
    descr_proced: "",
    val_proced: "",
    cod_espec: "",
  });

  // Função para lidar com a mudança dos inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica (opcional)
    if (
      !procedimentoData.cod_proced ||
      !procedimentoData.cod_espec ||
      !procedimentoData.descr_proced ||
      !procedimentoData.val_proced
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Salvar no localStorage
    localStorage.setItem("procedimentoData", JSON.stringify(procedimentoData));

    // Opcional: Limpar o formulário após o envio
    setProcedimentoData({
      cod_proced: "",
      descr_proced: "",
      val_proced: "",
      cod_espec: "",
    });

    // Opcional: Notificar o usuário
    alert("Procedimento cadastrado com sucesso!");
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
          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default CadastroProce;
