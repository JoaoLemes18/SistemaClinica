import React from "react";
import { Link } from "react-router-dom";
import {
  FaMicroscope,
  FaStethoscope,
  FaPalette,
  FaHeartbeat,
  FaAppleAlt,
  FaBrain,
} from "react-icons/fa";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack"; // Importar o componente Button

interface ClickableCardProps {
  title: string;
  icon: JSX.Element;
  path: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ title, icon, path }) => {
  const handleClick = () => {
    window.location.href = path;
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
};

const Health = () => {
  return (
    <div className="clinic-page">
      <Title className="title">Subsistemas da Clínica</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
      <div className="cards-container">
        <ClickableCard
          title="Biomedicina"
          icon={<FaMicroscope size={35} color="#00a32a" />}
          path="/clinic/biomedicine"
        />
        <ClickableCard
          title="Enfermagem"
          icon={<FaStethoscope size={35} color="#00a32a" />}
          path="/clinic/nursing"
        />
        <ClickableCard
          title="Estética e Cosméticos"
          icon={<FaPalette size={35} color="#00a32a" />}
          path="/clinic/aesthetics-cosmetics"
        />
        <ClickableCard
          title="Fisioterapia"
          icon={<FaHeartbeat size={35} color="#00a32a" />}
          path="/clinic/physiotherapy"
        />
        <ClickableCard
          title="Nutrição"
          icon={<FaAppleAlt size={35} color="#00a32a" />}
          path="/clinic/nutrition"
        />
        <ClickableCard
          title="Psicologia"
          icon={<FaBrain size={35} color="#00a32a" />}
          path="/clinic/psychology"
        />
      </div>
    </div>
  );
};

export default Health;
