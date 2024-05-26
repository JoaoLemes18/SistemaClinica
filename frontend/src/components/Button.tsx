import { Icons } from "react-toastify";
import "../styles/Button.scss";

interface ButtonProps {
  content: string;
  icon?: any;
  props?: any;
  onClick?: () => void;
}

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
