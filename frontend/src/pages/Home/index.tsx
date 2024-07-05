import React from "react";
import Card from "../../components/Card";
import { FaBriefcase, FaUserTie, FaClinicMedical } from "react-icons/fa"; // Exemplo de importação de ícones do react-icons
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Bem-vindo a Fasiclin</h1>
      <div className="cards-container">
        <Card
          title="Clínica"
          description="Marque consultas com a equipe de saúde."
          link="/health"
          icon={<FaClinicMedical size={40} color="#00a32a" />}
        />
        <Card
          title="Administrativo"
          description="Gerencie os serviços administrativos."
          link="/admin"
          icon={<FaBriefcase size={40} color="#00a32a" />}
        />
        <Card
          title="Secretaria"
          description="Veja informações da secretaria."
          link="/secretary"
          icon={<FaUserTie size={40} color="#00a32a" />}
        />
      </div>
    </div>
  );
};

export default Home;
