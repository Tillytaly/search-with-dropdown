import { ChangeEvent, useCallback, useMemo, useState } from "react";

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

function filterWith(obj: {}[] | [], phrase: string | number) {
  // co sie stannie jak NaN.toString()
  // const validPhrase = phrase.toString()

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

function useSearchWithDropdown<T extends Object>(
  itemList: T[],
) {
  const [searchedPhrase, setSearchedPhrase] = useState("");

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if(value.trim().length === 0) return;

    setSearchedPhrase(value);
  }, []);

  const filteredItemList = useMemo(() => {
    return filterWith(itemList, searchedPhrase);
  }, [itemList, searchedPhrase]);

  return { filteredItemList, onChange };
}

export { useSearchWithDropdown };
