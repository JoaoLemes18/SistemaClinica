import React from "react";
import {
  FaBriefcase,
  FaUserTie,
  FaClinicMedical,
  FaUsers,
  FaCalculator,
  FaGavel,
  FaWarehouse,
  FaShoppingCart,
  FaMoneyBillWave,
  FaTruck,
  FaHandHoldingUsd,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";
import "./styles.scss";
import Title from "../../components/Title";

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

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <Title>Bem-vindo a Fasiclin</Title>
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
      </div>
    </div>
  );
};

export default Home;
