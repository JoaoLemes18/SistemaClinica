import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

const CadastroProce = () => {
  return (
    <section className="body">
      <div className="botaovoltar">
        <ButtonBack to="/home">Voltar</ButtonBack>
      </div>
      <div className="titulo">
        <Title>Cadastro de Procedimento</Title>
      </div>

      <div className="form-container">
        <form>
          <Input
            name="cod.proced"
            type="text"
            placeholder="Código Procedimento"
          />
          <Input
            name="descr.proced"
            type="text"
            placeholder="Descrição doProcedimento"
          />
          <Input
            name="val.proced"
            type="text"
            placeholder="Valor do Procedimento"
          />
          <Button content="Cadastrar" />
        </form>
      </div>
    </section>
  );
};

export default CadastroProce;
