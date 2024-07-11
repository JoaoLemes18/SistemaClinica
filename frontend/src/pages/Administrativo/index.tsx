import Title from "../../components/Title";
import ButtonBack from "../../components/ButtonBack";

const Admin = () => {
  return (
    <div className="clinic-page">
      <Title>Administrativo</Title>
      <ButtonBack to="/home">Voltar</ButtonBack>
    </div>
  );
};

export default Admin;
