import { FaTrashAlt } from "react-icons/fa";
import { IconContextProvider } from "../../Contexts";
import { DropdownItemProps } from "./types";
import styles from "./DropdownItem.module.scss";

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
}: DropdownItemProps) => {
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
            <FaTrashAlt />
          </IconContextProvider>
        </div>
      </div>
    </div>
  );
};

export { DropdownItem };
