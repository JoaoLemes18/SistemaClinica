import "./styles.scss";
import { InputProps } from "../../interface/Input";

const Input = ({ ...props }: InputProps) => {
  return <input {...props} />;
};

export default Input;
