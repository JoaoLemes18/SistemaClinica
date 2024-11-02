import "./styles.scss";
import { InputProps } from "../../utils/interface/Input";

const Input = ({ ...props }: InputProps) => {
  return <input {...props} />;
};

export default Input;
