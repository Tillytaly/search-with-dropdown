import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ProductData } from "../../Types";
interface ObjectWithId {
  id: string;
}
const regExpToFindPhrase = (phrase: string): RegExp =>
  new RegExp(`${phrase}`, "gi");

const filterObjectCallback = (value: any, phrase: string): boolean => {
  const isArray = Array.isArray(value);
  const isObject = Object.prototype.toString.call(value) === "[object Object]";

  if (isObject) return filterObjectCallback(Object.values(value), phrase);

  if (isArray)
    return (
      value.filter((arrayItemValue) => {
        return filterObjectCallback(arrayItemValue, phrase);
      }).length > 0
    );

  return regExpToFindPhrase(phrase).test(value);
};

function filterWith(obj: any[] | [], phrase: string | number) {
  if (typeof phrase === "string") {
    if (phrase.length < 2) return [];
  }
  const copiedArray = [...obj];

  return typeof phrase === "string"
    ? Object.values(copiedArray).filter((item) =>
        filterObjectCallback(item, phrase.trim())
      )
    : Object.values(copiedArray).filter((item) =>
        filterObjectCallback(item, phrase.toString())
      );
}

function useSearchWithDropdown<T extends ObjectWithId>(itemList: T[]) {
  const [searchedPhrase, setSearchedPhrase] = useState("");
  const [filteredItemList, setFilteredItemList] = useState(itemList);

  const addItemToList = useCallback((newProduct: T) => {
    setFilteredItemList((prevItemList) => [...prevItemList, newProduct]);
  }, []);

  const removeItemFromList = useCallback((idOfItemToRemove: string) => {
    const copiedArray = [...filteredItemList];
    const indexOfItemToRemove = copiedArray.findIndex(
      ({ id }) => id === idOfItemToRemove
    );

    if (indexOfItemToRemove === -1) return;

    const arrayWithoutItemToRemove = copiedArray.splice(indexOfItemToRemove, 1);

    setFilteredItemList(arrayWithoutItemToRemove);
  }, []);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.trim().length === 0) return;

    setSearchedPhrase(value);
  }, []);

  const itemListToDisplay = useMemo(() => {
    return filterWith(filteredItemList, searchedPhrase);
  }, [filteredItemList, searchedPhrase]);

  return { itemListToDisplay, onChange, searchedPhrase, removeItemFromList };
}

export { useSearchWithDropdown };
