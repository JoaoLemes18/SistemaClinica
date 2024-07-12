import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Tem certeza que deseja sair da aplicação?"
    );

    if (confirmLogout) {
      dispatch(logoutUser());
      navigate("/login");
    }
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Sair
    </button>
  );
};

export default LogoutButton;
