import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/user/userSlice";
import { cardsData } from "../../utils/data";

import Title from "../../components/Title";
import ClickableCard from "../../components/Card";
import LogoutButton from "../../components/LogoutButton";
import UserInfo from "../../components/UserInfo";

import "./styles.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const params = new URLSearchParams(location.search);
    const tipoProf = params.get("tipo_prof");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (tipoProf && parsedUser.tipo_prof !== tipoProf) {
        parsedUser.tipo_prof = tipoProf;
      }
      dispatch(setUser(parsedUser));
    }
  }, [dispatch, location]);

  const verifyEspec = (codEspec: string | undefined, espec?: string[]) => {
    if (!codEspec || !espec) return true;
    return !espec.includes(codEspec.toString());
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
        {cardsData.map((card) => (
          <ClickableCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            path={card.path}
            disabled={verifyEspec(userData?.cod_espec, card.espec)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
