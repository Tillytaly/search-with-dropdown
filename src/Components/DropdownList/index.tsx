import { DropdownItem } from "../DropdownItem";
import { v4 as uuid } from "uuid";
import { DropdownListProps } from "./types";
const DropdownList = ({ listItems }: DropdownListProps) => {
  return (
    <>
      {listItems.map(({ name, regularPrice, salePrice }) => (
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
