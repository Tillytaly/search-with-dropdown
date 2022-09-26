import { DropdownItem } from "../DropdownItem";
import { v4 as uuid } from "uuid";
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
      {itemListToDisplay.map(({ id, name, regularPrice, salePrice }) => (
        <DropdownItem
          key={uuid()}
          id={id}
          title={name}
          regularPrice={regularPrice}
          salePrice={salePrice}
        />
      ))}
    </>
  );
};

export { DropdownList };
