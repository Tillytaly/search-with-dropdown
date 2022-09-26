import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { filterWith } from "../../Utils";
import { ObjectWithId } from "./types";
import { UseSearchWithDropdown } from "../../Types";

function useSearchWithDropdown<T extends ObjectWithId>(
  itemList: T[]
): UseSearchWithDropdown<T> {
  const [searchedPhrase, setSearchedPhrase] = useState("");
  const [filteredItemList, setFilteredItemList] = useState(itemList);
  console.log(filteredItemList)

  const addItemToList = useCallback((newProduct: T) => {
    setFilteredItemList((prevItemList) => [...prevItemList, newProduct]);
  }, []);

  const removeItemFromList = useCallback(
    (idOfItemToRemove: string) => {
      const copiedArray = [...filteredItemList];
      const indexOfItemToRemove = copiedArray.findIndex(
        ({ id }) => id === idOfItemToRemove
      );

      if (indexOfItemToRemove === -1) return;

      copiedArray.splice(indexOfItemToRemove, 1);

      setFilteredItemList(copiedArray);
    },
    [filteredItemList]
  );

  const onSearchedPhraseChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value.trim().length === 0) return;

      setSearchedPhrase(value);
    },
    []
  );

  const itemListToDisplay = useMemo(() => {
    return filterWith(filteredItemList, searchedPhrase);
  }, [filteredItemList, searchedPhrase]);

  return {
    itemListToDisplay,
    onSearchedPhraseChange,
    searchedPhrase,
    removeItemFromList,
    addItemToList,
  };
}

export { useSearchWithDropdown };
