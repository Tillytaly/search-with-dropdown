import { FaTrashAlt } from "react-icons/fa";
import { IconContextProvider } from "../../Contexts";
import { DropdownItemProps } from "./types";
import styles from "./DropdownItem.module.scss";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";

const {
  dropdownItem,
  productNameContainer,
  prices,
  oldPrice,
  newPrice,
  reactIcon,
  flexContainer,
  iconContainer,
} = styles;

const DropdownItem = ({
  title,
  regularPrice,
  salePrice,
  id
}: DropdownItemProps) => {
  const {removeItemFromList} = useSearchWithDropdownContext()
  return (
    <div className={dropdownItem}>
      <div className={productNameContainer}>
        <p>{title}</p>
      </div>
      <div className={flexContainer}>
        <div className={prices}>
          <div>
            <p className={oldPrice}>{`$${regularPrice}`}</p>
          </div>
          <div>
            <p className={newPrice}>{`$${salePrice}`}</p>
          </div>
        </div>
        <div className={iconContainer}>
          <IconContextProvider className={reactIcon}>
            <FaTrashAlt onClick={() => removeItemFromList(id)}/>
          </IconContextProvider>
        </div>
      </div>
    </div>
  );
};

export { DropdownItem };
