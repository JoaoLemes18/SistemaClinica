import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

const CadastroEspec = () => {
  return (
    <section className="body">
      <div className="botaovoltar">
        <ButtonBack to="/home">Voltar</ButtonBack>
      </div>
      <div className="titulo">
        <Title>Cadastro de Especialidade</Title>
      </div>

      <div className="form-container">
        <form>
          <Input
            name="cod_especialidade"
            type="text"
            placeholder="Código Especialidade"
          />
          <Input name="especialidade" type="text" placeholder="Especialidade" />
          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default CadastroEspec;
