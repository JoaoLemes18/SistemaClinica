import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";
import Card from "../../components/Card";

// Importando novos ícones da biblioteca react-icons
import { FaUserMd, FaStethoscope, FaCalendarAlt } from "react-icons/fa";

const Agenda = () => {
  return (
    <div className="clinic-page">
      <Title>Agenda</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
      <div className="cards-container">
        <Card
          title="Cadastro de Especialidade"
          icon={<FaUserMd size={35} color="#00a32a" />}
          path="/agenda/cadastro-de-especialidade"
        />
        <Card
          title="Cadastro de Procedimento"
          icon={<FaStethoscope size={35} color="#00a32a" />}
          path="/agenda/cadastro-de-procedimento"
        />
        <Card
          title="Subsistema"
          icon={<FaCalendarAlt size={35} color="#00a32a" />}
          path="/agenda/sistema-agenda"
        />
      </div>
    </div>
  );
};

export default Agenda;
