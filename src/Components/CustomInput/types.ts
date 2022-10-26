import { FocusEvent, ChangeEvent, ChangeEventHandler } from "react";

export interface CustomInputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent) => void;
  placeholder?: string;
  errorMessage?: string;
  touched?: boolean;
  clasName?: string;
}
