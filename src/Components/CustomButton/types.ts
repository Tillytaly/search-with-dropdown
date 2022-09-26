import { PropsWithClassName, PropsWithChildren } from "../../Types";

export interface CustomButtonProps
  extends PropsWithClassName,
    PropsWithChildren {
  type: "submit" | "button";
  onClick?: (arg?: any) => void;
  disabled?: boolean;
}
