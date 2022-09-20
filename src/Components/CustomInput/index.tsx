import styles from "./CustomInput.module.scss";
const { customInputContainer, customInput, customInputLabel } = styles;
const CustomInput = ({ id, type, label, placeholder }: any) => {
  return (
    <div className={customInputContainer}>
      <label htmlFor={id} className={customInputLabel}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={customInput}
      ></input>
    </div>
  );
};

export { CustomInput };
