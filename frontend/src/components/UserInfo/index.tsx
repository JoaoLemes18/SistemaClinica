import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import "./style.scss";

const UserInfo = () => {
  const userData = useSelector((state: any) => state.user);

  return (
    <div className="user-info">
      {userData && (
        <>
          <div className="user-icon">
            <FaUser size={20} color="#00a32a" />
          </div>
          <div className="user-details">
            <p className="user-name">
              <span style={{ color: "#000" }}>Olá,</span>{" "}
              <span style={{ color: "#00a32a" }}>{userData.nome_prof}</span>
            </p>
            <p className="user-code">
              <span style={{ color: "#000" }}>Seu código é o</span>{" "}
              <span style={{ color: "#00a32a" }}>{userData.cod_prof}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
