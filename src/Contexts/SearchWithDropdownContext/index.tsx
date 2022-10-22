import { useContext, createContext } from "react";
import {
  ISearchWithDropdownContext,
  SearchWithDropdownProviderProps,
} from "./types";
import { useSearchWithDropdown } from "../../Hooks/useSearchWithDropdown";
import { useProductStoreContext } from "../ProductStoreContext";

const SearchWithDropdownContext =
  createContext<null | ISearchWithDropdownContext>(null);

export const SearchWithDropdownProvider = ({
  children,
}: SearchWithDropdownProviderProps) => {
  const { availableProducts } = useProductStoreContext();
  const { onSearchedPhraseChange, searchedPhrase, itemListToDisplay } =
    useSearchWithDropdown(availableProducts);

  return (
    <SearchWithDropdownContext.Provider
      value={{
        onSearchedPhraseChange,
        searchedPhrase,
        itemListToDisplay,
      }}
    >
      {children}
    </SearchWithDropdownContext.Provider>
  );
};

export const useSearchWithDropdownContext = () => {
  const context = useContext(SearchWithDropdownContext);

  if (!context) throw new Error("No context provided.");

  return context;
};
