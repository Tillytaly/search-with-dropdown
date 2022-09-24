import styles from "./SearchWithDropdown.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { IconContextProvider } from "../../Contexts";
import { DropdownList } from "../DropdownList";
import { useSearchWithDropdown } from "./useSearchWithDropdown";
import { Wrapper } from "../Wrapper";

const {
  searchWithDropdown,
  inputContainer,
  input,
  iconContainer,
  icon,
  inputBackground,
} = styles;

const SearchWithDropdown = ({ listItems }: any) => {
  const { onChange, filteredItemList } = useSearchWithDropdown(listItems);

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
