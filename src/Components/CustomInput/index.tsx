import styles from "./CustomInput.module.scss";
import { CustomInputProps } from "./types";
const {
  customInputContainer,
  customInput,
  customInputLabel,
  error,
  inputError,
} = styles;

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
}: CustomInputProps) => {
  const shouldDisplayErrorMessage = touched && errorMessage;

  return (
    <div className={customInputContainer}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${customInput} ${
          shouldDisplayErrorMessage ? inputError : ""
        }`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></input>
      <label htmlFor={id} className={customInputLabel}>
        {label}
      </label>
      {shouldDisplayErrorMessage && <p className={error}>{errorMessage}</p>}
    </div>
  );
};

export { CustomInput };
