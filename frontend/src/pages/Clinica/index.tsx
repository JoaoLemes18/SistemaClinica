import { useEffect, useState } from "react";
import {
  FaMicroscope,
  FaStethoscope,
  FaPalette,
  FaUserMd,
  FaHeartbeat,
  FaAppleAlt,
  FaBrain,
  FaTooth,
} from "react-icons/fa";

import Card from "../../components/Card";
import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";

const Clinica = () => {
  const [userEspec, setUserEspec] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserEspec(parsedUser.cod_espec?.toString() || null);
    }
  }, []);

  const verifyEspec = (espec: string) => {
    return userEspec !== espec;
  };

  return (
    <div className="clinic-page">
      <Title className="title">Subsistemas da Clínica</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
      <div className="cards-container">
        <Card
          espec="00"
          title="Biomedicina"
          icon={<FaMicroscope size={35} color="#00a32a" />}
          path="/clinic/biomedicine"
          disabled={verifyEspec("00")}
        />
        <Card
          espec="10"
          title="Enfermagem"
          icon={<FaUserMd size={35} color="#00a32a" />}
          path="/clinic/nursing"
          disabled={verifyEspec("10")}
        />
        <Card
          espec="20"
          title="Estética e Cosméticos"
          icon={<FaPalette size={35} color="#00a32a" />}
          path="/clinic/aesthetics-cosmetics"
          disabled={verifyEspec("20")}
        />
        <Card
          espec="30"
          title="Fisioterapia"
          icon={<FaHeartbeat size={35} color="#00a32a" />}
          path="/clinic/physiotherapy"
          disabled={verifyEspec("30")}
        />
        <Card
          espec="40"
          title="Nutrição"
          icon={<FaAppleAlt size={35} color="#00a32a" />}
          path="/clinic/nutrition"
          disabled={verifyEspec("40")}
        />
        <Card
          espec="50"
          title="Psicologia"
          icon={<FaBrain size={35} color="#00a32a" />}
          path="/clinic/psychology"
          disabled={verifyEspec("50")}
        />
        <Card
          espec="70"
          title="Odontologia"
          icon={<FaTooth size={35} color="#00a32a" />}
          path="/clinic/dentistry"
          disabled={verifyEspec("70")}
        />
        <Card
          espec="90"
          title="Medicina"
          icon={<FaStethoscope size={35} color="#00a32a" />}
          path="/clinic/dentistry"
          disabled={verifyEspec("90")}
        />
      </div>
    </div>
  );
};

export default Clinica;
