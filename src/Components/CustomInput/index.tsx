import { CustomInputProps } from "./types";

import styles from "./rwd.module.scss";
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
  errorMessage,
  value,
  touched,
  onBlur,
  onChange,
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
        value={value}
        onChange={onChange}
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
