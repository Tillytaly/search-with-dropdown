import styles from "./SearchWithDropdown.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { IconContextProvider } from "../../Contexts";
import { DropdownList } from "../DropdownList";
import { useSearchWithDropdown } from "./useSearchWithDropdown";
import { Wrapper } from "../Wrapper";
import { SearchWithDropdownProps } from "./types";
import { useRef } from "react";

const { searchWithDropdown, inputContainer, input, iconContainer, icon } =
  styles;

const SearchWithDropdown = ({ listItems }: SearchWithDropdownProps) => {
  const { filteredItemList, onChange } = useSearchWithDropdown(listItems);

  return (
    <Wrapper className={searchWithDropdown}>
      <div className={inputContainer}>
        <label htmlFor="searchField"></label>
        <input
          className={input}
          onChange={onChange}
          id="searchField"
          placeholder="search"
        ></input>
        <div className={iconContainer}>
          <IconContextProvider className={icon}>
            <RiSearchLine />
          </IconContextProvider>
        </div>
      </div>

      <DropdownList listItems={filteredItemList} />
    </Wrapper>
  );
};
export { SearchWithDropdown };
