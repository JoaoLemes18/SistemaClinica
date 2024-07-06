import React from "react";
import "./styles.scss";

interface User {
  nome_prof: string;
}

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <h2>Olá, {user.nome_prof}</h2>
    </div>
  );
};

export default UserDetails;
