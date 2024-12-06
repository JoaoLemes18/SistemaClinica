import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import "./style.scss";

const UserInfo = () => {
  // Tenta obter os dados do Redux ou do localStorage
  const userDataFromRedux = useSelector((state: any) => state.user);
  const userDataFromStorage = JSON.parse(
    localStorage.getItem("userData") || "null"
  );

  // Prioriza os dados do Redux, mas usa os dados do localStorage como fallback
  const userData = userDataFromStorage || userDataFromRedux;

  if (!userData) {
    return <p>Carregando...</p>; // Exibe uma mensagem enquanto os dados são carregados
  }

  return (
    <div className="user-info">
      <div className="user-icon">
        <FaUser size={20} color="#00a32a" />
      </div>
      <div className="user-details">
        <p className="user-name">
          <span style={{ color: "#000" }}>Olá,</span>{" "}
          <span style={{ color: "#00a32a" }}>{userData.nome_prof}</span>
        </p>
        <p className="user-code">
          <span style={{ color: "#000" }}>Seu código é </span>{" "}
          <span style={{ color: "#00a32a" }}>{userData.cod_prof}</span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
