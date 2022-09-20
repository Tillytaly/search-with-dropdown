import { DropdownItem } from "../DropdownItem";
import { v4 as uuid } from "uuid";
const DropdownList = ({ listItems }: any) => {
  return (
    <>
      {listItems.map(({ name, regularPrice, salePrice }: any) => (
        <DropdownItem
          key={uuid()}
          title={name}
          regularPrice={regularPrice}
          salePrice={salePrice}
        />
      ))}
    </>
  );
};

export { DropdownList };
