import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Title from "../../components/Title";
import ClickableCard from "../../components/Card";
import LogoutButton from "../../components/LogoutButton";
import UserInfo from "../../components/UserInfo";

import { cardsData } from "../../utils/data";

import "./styles.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  // const userData = useSelector((state: any) => state.user); // Dados do usuário do Redux
  const [userData, setUserData] = useState<any>(null);

  // Recupera os dados do usuário do localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const { status_prof, token, ...filteredUser } = parsedUser;
      setUserData(filteredUser);
    }
  }, []);

  // Função para verificar se o card é das clínicas
  const verifyClinicaEspec = (
    codEspec: string | undefined,
    espec?: string[]
  ) => {
    if (!codEspec || !espec) return true;
    return espec.includes(codEspec.toString());
  };

  // Função para verificar se o card é administrativo
  const verifyAdminEspec = (tipoProf?: string) => {
    return tipoProf === "1"; // Administrativo habilitado apenas para tipo_prof === 1
  };

  return (
    <div className="homepage">
      <div className="user-info-container">
        <UserInfo />
      </div>
      <div className="logout-container">
        <LogoutButton />
      </div>

      <Title>Bem-vindo a Fasiclin</Title>

      <div className="cards-container">
        {cardsData.map((card) => {
          const isMaster = userData?.tipo_prof === 4; // Verifica se é Master
          const isClinicaCard = card.espec !== undefined;

          // Define se o usuário tem acesso ao card
          const hasAccess = isMaster
            ? true // Master tem acesso a tudo
            : isClinicaCard
            ? verifyClinicaEspec(userData?.cod_espec, card.espec)
            : verifyAdminEspec(userData?.tipo_prof);

          return (
            <ClickableCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              path={card.path}
              disabled={!hasAccess} // Desabilita o card se não tiver acesso
              onClick={() => hasAccess && navigate(card.path)} // Navega apenas se tiver acesso
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
