import Button from "./Button";
import PerfilFirstLetter from "./PerfilFirstLetter";

interface Lists {
  id_appointment: number;
  name: string;
  email: string;
  hour: string;
  User: any;
}

interface ListProps {
  item: Lists[];
}

const List: React.FC<ListProps> = ({ item }) => {
  return (
    <section className="container-all">
      <div className="container-list">
        {item.map((item) => (
          <div className="list" key={item.id_appointment}>
            <div>
              <PerfilFirstLetter word={item.User.name} />
            </div>
            <div>{item.User.name}</div>
            <div>{item.hour}</div>

            <div className="div-buttons">
              <Button content="..." />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
