import { WrapperProps } from "./types";
import styles from "./Wrapper.module.scss";

const { wrapper } = styles;
const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={`${className} ${wrapper}`}>{children}</div>;
};

export { Wrapper };
