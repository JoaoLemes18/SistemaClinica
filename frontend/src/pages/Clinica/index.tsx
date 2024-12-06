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
  const [userData, setUserData] = useState<any>(null);
  let hasAccess = false;

  // Recupera os dados do usuário do localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const { status_prof, token, ...filteredUser } = parsedUser;
      setUserData(filteredUser);
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserEspec(parsedUser.cod_espec?.toString() || null);
    }
  }, []);

  const isMaster = userData?.tipo_prof === 4; // Verifica se é Master
  if (isMaster) {
    hasAccess = true;
  }

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
          disabled={!hasAccess && verifyEspec("00")}
        />
        <Card
          espec="10"
          title="Enfermagem"
          icon={<FaUserMd size={35} color="#00a32a" />}
          path="/clinic/nursing"
          disabled={!hasAccess && verifyEspec("10")}
        />
        <Card
          espec="20"
          title="Estética e Cosméticos"
          icon={<FaPalette size={35} color="#00a32a" />}
          path="/clinic/aesthetics-cosmetics"
          disabled={!hasAccess && verifyEspec("20")}
        />
        <Card
          espec="30"
          title="Fisioterapia"
          icon={<FaHeartbeat size={35} color="#00a32a" />}
          path="/clinic/physiotherapy"
          disabled={!hasAccess && verifyEspec("30")}
        />
        <Card
          espec="40"
          title="Nutrição"
          icon={<FaAppleAlt size={35} color="#00a32a" />}
          path="/clinic/nutrition"
          disabled={!hasAccess && verifyEspec("40")}
        />
        <Card
          espec="50"
          title="Odontologia"
          icon={<FaTooth size={35} color="#00a32a" />}
          path="/clinic/dentistry"
          disabled={!hasAccess && verifyEspec("50")}
        />
        <Card
          espec="70"
          title="Psicologia"
          icon={<FaBrain size={35} color="#00a32a" />}
          path="/clinic/psychology"
          disabled={!hasAccess && verifyEspec("70")}
        />
        <Card
          espec="90"
          title="Medicina"
          icon={<FaStethoscope size={35} color="#00a32a" />}
          path="/clinic/dentistry"
          disabled={!hasAccess && verifyEspec("90")}
        />
      </div>
    </div>
  );
};

export default Clinica;
