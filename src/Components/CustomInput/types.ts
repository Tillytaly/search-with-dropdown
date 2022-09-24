import { FocusEvent, ChangeEvent } from "react";

export interface CustomInputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  value: string;
  onBlur: (event: FocusEvent) => void;
  touched?: boolean;
}
