import styles from "./CustomInput.module.scss";
const { customInputContainer, customInput, customInputLabel } = styles;
const CustomInput = ({
  id,
  type,
  label,
  placeholder,
  onChange,
  errorMessage,
  value,
  onBlur,
  touched,
}: any) => {
  const shouldDisplayErrorMessage = touched && errorMessage;

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
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></input>
      {shouldDisplayErrorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export { CustomInput };
