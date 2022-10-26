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
  const buttonClassName = `${className} ${customButton}`;
  
  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { CustomButton };
