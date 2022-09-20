import styles from "./DropdownItem.module.scss";
import { DropdownItemProps } from "./types";
const { dropdownItem, productNameContainer, prices, oldPrice, newPrice } =
  styles;

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
      <div className={prices}>
        <div>
          <p className={oldPrice}>{`$${regularPrice}`}</p>
        </div>
        <div>
          <p className={newPrice}>{`$${salePrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export { DropdownItem };
