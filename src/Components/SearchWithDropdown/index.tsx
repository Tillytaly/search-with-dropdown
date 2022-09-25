import styles from "./SearchWithDropdown.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { IconContextProvider } from "../../Contexts";
import { DropdownList } from "../DropdownList";
import { Wrapper } from "../Wrapper";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";

const { searchWithDropdown, inputContainer, input, iconContainer, icon } =
  styles;

const SearchWithDropdown = () => {
  const { onSearchedPhraseChange } = useSearchWithDropdownContext();

  return (
    <Wrapper className={searchWithDropdown}>
      <div className={inputContainer}>
        <label htmlFor="searchField"></label>
        <input
          className={input}
          onChange={onSearchedPhraseChange}
          id="searchField"
          placeholder="search"
        ></input>
        <div className={iconContainer}>
          <IconContextProvider className={icon}>
            <RiSearchLine />
          </IconContextProvider>
        </div>
      </div>

      <DropdownList />
    </Wrapper>
  );
};
export { SearchWithDropdown };
