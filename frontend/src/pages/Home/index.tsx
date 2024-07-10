import React, { useEffect, useState } from "react";
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
import "./styles.scss";

const Home: React.FC = () => {
  const [userData, setUserData] = useState<{
    cod_prof: string;
    nome_prof: string;
  } | null>(null);

  useEffect(() => {
    // Recuperar dados do localStorage ao carregar a página
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserData(userData);
    }
  }, []);

  return (
    <div className="homepage">
      <Title>Bem-vindo a Fasiclin</Title>

      {userData && (
        <div className="user-info">
          <p>Código do Profissional: {userData.cod_prof}</p>
          <p>Nome do Profissional: {userData.nome_prof}</p>
        </div>
      )}

      <div className="cards-container">
        <ClickableCard
          title="Clínica"
          icon={<FaClinicMedical size={35} color="#00a32a" />}
          path="/health"
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
