import { useContext, createContext } from "react";
import {
  ISearchWithDropdownContext,
  SearchWithDropdownProviderProps,
} from "./types";
import { useSearchWithDropdown } from "../../Hooks/useSearchWithDropdown";
import { initialSearchData } from "../../dummyData";

const SearchWithDropdownContext =
  createContext<null | ISearchWithDropdownContext>(null);

export const SearchWithDropdownProvider = ({
  children,
}: SearchWithDropdownProviderProps) => {
  const {
    addItemToList,
    onSearchedPhraseChange,
    searchedPhrase,
    removeItemFromList,
    itemListToDisplay,
  } = useSearchWithDropdown(initialSearchData);

  return (
    <SearchWithDropdownContext.Provider
      value={{
        addItemToList,
        onSearchedPhraseChange,
        removeItemFromList,
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
