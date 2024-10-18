import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/user/userSlice";

import {
  FaClinicMedical,
  FaBriefcase,
  FaUserTie,
  FaCalendarAlt,
  FaUsers,
  FaCalculator,
  FaGavel,
  FaWarehouse,
  FaShoppingCart,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaDollarSign,
  FaTruck,
  FaFileMedical,
} from "react-icons/fa";

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
        <ClickableCard
          title="Clínica"
          icon={<FaClinicMedical size={35} color="#00a32a" />}
          path="/health"
          className="card"
        />
        <ClickableCard
          title="Administrativo"
          icon={<FaBriefcase size={35} color="#00a32a" />}
          path="/admin"
        />
        <ClickableCard
          title="Secretaria"
          icon={<FaUserTie size={35} color="#00a32a" />}
          path="/secretary"
        />
        <ClickableCard
          title="Agenda"
          icon={<FaCalendarAlt size={35} color="#00a32a" />}
          path="/agenda"
        />
        <ClickableCard
          title="Recursos Humanos"
          icon={<FaUsers size={35} color="#00a32a" />}
          path="/hr"
        />
        <ClickableCard
          title="Contábil"
          icon={<FaCalculator size={35} color="#00a32a" />}
          path="/accounting"
        />
        <ClickableCard
          title="NPJ"
          icon={<FaGavel size={35} color="#00a32a" />}
          path="/npj"
        />
        <ClickableCard
          title="Estoque"
          icon={<FaWarehouse size={35} color="#00a32a" />}
          path="/inventory"
        />
        <ClickableCard
          title="Vendas"
          icon={<FaShoppingCart size={35} color="#00a32a" />}
          path="/sales"
        />
        <ClickableCard
          title="Compras"
          icon={<FaMoneyBillWave size={35} color="#00a32a" />}
          path="/purchasing"
        />
        <ClickableCard
          title="Contas a Pagar"
          icon={<FaHandHoldingUsd size={35} color="#00a32a" />}
          path="/accounts-payable"
        />
        <ClickableCard
          title="Contas a Receber"
          icon={<FaDollarSign size={35} color="#00a32a" />}
          path="/accounts-receivable"
        />
        <ClickableCard
          title="Transporte"
          icon={<FaTruck size={35} color="#00a32a" />}
          path="/transport"
        />
        <ClickableCard
          title="Prontuário"
          icon={<FaFileMedical size={35} color="#00a32a" />}
          path="/medical-records"
        />
      </div>
    </div>
  );
};

export default Home;
