import React from "react";
import {
  FaMicroscope,
  FaStethoscope,
  FaPalette,
  FaHeartbeat,
  FaAppleAlt,
  FaBrain,
  FaTooth,
} from "react-icons/fa";
import Card from "../../components/Card";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";

const Health = () => {
  return (
    <div className="clinic-page">
      <Title className="title">Subsistemas da Clínica</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
      <div className="cards-container">
        <Card
          title="Biomedicina"
          icon={<FaMicroscope size={35} color="#00a32a" />}
          path="/clinic/biomedicine"
        />
        <Card
          title="Enfermagem"
          icon={<FaStethoscope size={35} color="#00a32a" />}
          path="/clinic/nursing"
        />
        <Card
          title="Estética e Cosméticos"
          icon={<FaPalette size={35} color="#00a32a" />}
          path="/clinic/aesthetics-cosmetics"
        />
        <Card
          title="Fisioterapia"
          icon={<FaHeartbeat size={35} color="#00a32a" />}
          path="/clinic/physiotherapy"
        />
        <Card
          title="Nutrição"
          icon={<FaAppleAlt size={35} color="#00a32a" />}
          path="/clinic/nutrition"
        />
        <Card
          title="Psicologia"
          icon={<FaBrain size={35} color="#00a32a" />}
          path="/clinic/psychology"
        />
        <Card
          title="Odontologia"
          icon={<FaTooth size={35} color="#00a32a" />}
          path="/clinic/dentistry"
        />
      </div>
    </div>
  );
};

export default Health;
