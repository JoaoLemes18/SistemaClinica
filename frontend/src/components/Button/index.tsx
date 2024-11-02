import "./styles.scss";
import { ButtonProps } from "../../utils/interface/Button";

const Button = ({ content, icon, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <p>
        {icon}
        {content}
      </p>
    </button>
  );
};

export default Button;
