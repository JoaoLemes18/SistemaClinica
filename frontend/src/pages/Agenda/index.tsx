import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Card from "../../components/Card";

import { FaFileMedical } from "react-icons/fa";

const Agenda = () => {
  return (
    <div className="clinic-page">
      <Title>Agenda</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
      <div className="cards-container">
        <Card
          title="Cadastro de Procedimentos"
          icon={<FaFileMedical size={35} color="#00a32a" />}
          path="/agenda/cadastro-de-procedimentos"
        />
        <Card
          title="Subsistema"
          icon={<FaFileMedical size={35} color="#00a32a" />}
          path="/agenda/sistema-agenda
          "
        />
      </div>
    </div>
  );
};

export default Agenda;
