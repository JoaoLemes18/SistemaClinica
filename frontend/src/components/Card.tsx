import Button from "./Button";
import PerfilFirstLetter from "./PerfilFirstLetter";
import "../styles/CrudUsers.scss";

interface Cards {
  id_appointment: number;
  name: string;
  email: string;
  hour: string;
  User: any;
}

interface CardProps {
  item: Cards[];
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="container-cards">
      {item.map((item) => (
        <div className="card-customer" key={item.id_appointment}>
          <div>
            <PerfilFirstLetter word={item.User.name} />
          </div>
          <div className="info-container">
            <div>{item.User.name}</div>
            <div>{item.hour}</div>
          </div>

          <div className="div-buttons">
            <Button content="..." />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
