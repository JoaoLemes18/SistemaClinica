import "./styles.scss";

interface ButtonProps {
  content: string;
  icon?: unknown;
  props?: unknown;
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
