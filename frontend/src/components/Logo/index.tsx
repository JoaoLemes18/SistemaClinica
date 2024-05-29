import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.png"; // Ajuste o caminho para a localização da sua logo

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="Logo da Faculdade"
        className="logo-container__logo"
      />
    </div>
  );
};

export default Logo;
