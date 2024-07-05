import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode; // Definir a propriedade icon como ReactNode
}

const Card: React.FC<CardProps> = ({ title, description, link, icon }) => {
  return (
    <div className="card">
      <div className="card-content">
        {icon && <div className="card-icon">{icon}</div>}
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Ver mais</a>
      </div>
    </div>
  );
};

export default Card;
