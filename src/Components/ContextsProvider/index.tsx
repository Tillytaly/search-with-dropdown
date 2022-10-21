import {
  SearchWithDropdownProvider,
  ProductStoreProvider,
} from "../../Contexts/index";
import { ContextsProviderProps } from "./types";

const ContextsProvider = ({ children }: ContextsProviderProps) => {
  return (
    <ProductStoreProvider>
      <SearchWithDropdownProvider>{children}</SearchWithDropdownProvider>
    </ProductStoreProvider>
  );
};

export { ContextsProvider };
