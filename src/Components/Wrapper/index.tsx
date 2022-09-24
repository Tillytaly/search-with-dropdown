import styles from "./Wrapper.module.scss";

const { wrapper } = styles;
const Wrapper = ({ children, className }: any) => {
  return <div className={`${className} ${wrapper}`}>{children}</div>;
};

export { Wrapper };
