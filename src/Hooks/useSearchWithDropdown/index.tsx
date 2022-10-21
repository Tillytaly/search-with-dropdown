import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { filterWith } from "../../Utils";
import { ObjectWithId } from "./types";
import { UseSearchWithDropdown } from "../../Types";

function useSearchWithDropdown<T extends ObjectWithId>(
  itemList: T[]
): UseSearchWithDropdown<T> {
  const [searchedPhrase, setSearchedPhrase] = useState("");

  const onSearchedPhraseChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value.trim().length === 0) return;

      setSearchedPhrase(value);
    },
    []
  );

  const itemListToDisplay = useMemo(() => {
    return filterWith(itemList, searchedPhrase);
  }, [itemList, searchedPhrase]);

  return {
    itemListToDisplay,
    onSearchedPhraseChange,
    searchedPhrase,
  };
}

export { useSearchWithDropdown };
