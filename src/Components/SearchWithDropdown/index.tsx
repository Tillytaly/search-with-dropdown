import styles from "./SearchWithDropdown.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { DropdownList } from "../DropdownList";
import { Wrapper } from "../Wrapper";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";
import { useCallback } from "react";

const { searchWithDropdown, inputContainer, input, iconContainer, icon } =
  styles;

const SearchWithDropdown = () => {
  const { onSearchedPhraseChange } = useSearchWithDropdownContext();

  const onContainerClick = useCallback((inputClassName: string) => {
    const inputToFocus = document.querySelector(
      `.${inputClassName}`
    ) as HTMLInputElement;

    inputToFocus.focus();
  }, []);

  return (
    <Wrapper className={searchWithDropdown}>
      <div className={inputContainer} onClick={() => onContainerClick(input)}>
        <label htmlFor="searchField"></label>
        <input
          className={input}
          onChange={onSearchedPhraseChange}
          id="searchField"
          placeholder="Search"
        ></input>
        <div className={iconContainer}>
            <RiSearchLine className={icon}/>
        </div>
      </div>
      <DropdownList />
    </Wrapper>
  );
};
export { SearchWithDropdown };
