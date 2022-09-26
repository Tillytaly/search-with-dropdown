import { IconContext } from "react-icons";
import { TIconContextProviderProps } from "./types";
export const IconContextProvider = ({
  children,
  color,
  className,
  size,
}: TIconContextProviderProps) => {
  return (
    <IconContext.Provider value={{ color, className, size }}>
      {children}
    </IconContext.Provider>
  );
};
