import { FaTrashAlt } from "react-icons/fa";
import { DropdownItemProps } from "./types";
import styles from "./DropdownItem.module.scss";
import { useProductStoreContext } from "../../Contexts/";

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
  id,
}: DropdownItemProps) => {
  const { removeProduct } = useProductStoreContext();
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
            <FaTrashAlt className={reactIcon} onClick={() => removeProduct(id)} />
        </div>
      </div>
    </div>
  );
};

export { DropdownItem };
