import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ButtonProps } from "../../interface/ButtonBack";

const Button: React.FC<ButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
};

export default Button;
