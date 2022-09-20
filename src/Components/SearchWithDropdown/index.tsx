import styles from "./SearchWithDropdown.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { IconContextProvider } from "../../Contexts";
import { DropdownList } from "../DropdownList";
import { useSearchWithDropdown } from "./useSearchWithDropdown";

const { searchWithDropdown, inputContainer, input, iconContainer, icon, inputBackground } =
  styles;

const SearchWithDropdown = ({ listItems }: any) => {
  const { onChange, filteredItemList } = useSearchWithDropdown(listItems);

  return (
    <div className={searchWithDropdown}>
      <div className={inputBackground}>
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
      </div>

      <DropdownList listItems={filteredItemList} />
    </div>
  );
};
export { SearchWithDropdown };
