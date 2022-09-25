import { DropdownItem } from "../DropdownItem";
import { v4 as uuid } from "uuid";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";
const DropdownList = () => {
  const { itemListToDisplay, searchedPhrase } = useSearchWithDropdownContext();

  const areNoProductsFound =
    itemListToDisplay.length === 0 && searchedPhrase.length > 2;

  if (areNoProductsFound) {
    return (
      <>
        <p>No products found.</p>
      </>
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
