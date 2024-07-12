import React from "react";
import "./styles.scss";

interface CardProps {
  title: string;
  icon: JSX.Element;
  path: string;
  className?: string; // Propriedade opcional para className
  disabled?: boolean; // Propriedade opcional para desabilitar o card
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  path,
  className = "",
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled) {
      window.location.href = path;
    }
  };

  return (
    <div
      className={`card ${className} ${disabled ? "disabled-card" : ""}`}
      onClick={handleClick}
    >
      <div className="card-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
