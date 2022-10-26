import { DropdownItem } from "../DropdownItem";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";

import styles from "./DropdownList.module.scss";
const { messageContainer } = styles;

const DropdownList = () => {
  const { itemListToDisplay, searchedPhrase } = useSearchWithDropdownContext();
  const areNoProductsFound =
    itemListToDisplay.length === 0 && searchedPhrase.length > 2;

  if (areNoProductsFound) {
    return (
      <div className={messageContainer}>
        <p>No results found</p>
      </div>
    );
  }
  return (
    <>
      {itemListToDisplay.map((item) => (
        <DropdownItem key={item.id + item.name} {...item} />
      ))}
    </>
  );
};

export { DropdownList };
