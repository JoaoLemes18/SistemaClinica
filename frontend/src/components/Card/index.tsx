import React from "react";
import "./styles.scss";

interface CardProps {
  title: string;
  icon: JSX.Element;
  path: string;
}

const Card: React.FC<CardProps> = ({ title, icon, path }) => {
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

export default Card;
