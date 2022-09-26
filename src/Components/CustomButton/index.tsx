import { CustomButtonProps } from "./types";
import styles from "./CustomButton.module.scss";

const { customButton } = styles;

const CustomButton = ({
  className,
  children,
  type,
  disabled,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`${className} ${customButton}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { CustomButton };
