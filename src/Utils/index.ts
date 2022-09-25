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


  export function filterWith(obj: any[] | [], phrase: string | number) {
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
  