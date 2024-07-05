import React from "react";
import { FaBriefcase, FaUserTie, FaClinicMedical } from "react-icons/fa";
import "./styles.scss";

interface ClickableCardProps {
  title: string;
  icon: JSX.Element;
  path: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ title, icon, path }) => {
  const handleClick = () => {
    window.location.href = path; // Redirecionamento usando window.location.href
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
      <h1>Bem-vindo a Fasiclin</h1>
      <div className="cards-container">
        <ClickableCard
          title="Clínica"
          icon={<FaClinicMedical size={40} color="#00a32a" />}
          path="/health"
        />
        <ClickableCard
          title="Administrativo"
          icon={<FaBriefcase size={40} color="#00a32a" />}
          path="/admin"
        />
        <ClickableCard
          title="Secretaria"
          icon={<FaUserTie size={40} color="#00a32a" />}
          path="/secretary"
        />
      </div>
    </div>
  );
};

export default Home;
