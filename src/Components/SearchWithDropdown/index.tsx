import { useCallback, useRef, MutableRefObject } from "react";
import { DropdownList } from "../DropdownList";
import { Wrapper } from "../Wrapper";
import { RiSearchLine } from "react-icons/ri";
import { useSearchWithDropdownContext } from "../../Contexts/SearchWithDropdownContext";

import styles from "./SearchWithDropdown.module.scss";

const { searchWithDropdown, inputContainer, input, iconContainer, icon } =
  styles;

const SearchWithDropdown = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onSearchedPhraseChange } = useSearchWithDropdownContext();

  const onContainerClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Wrapper className={searchWithDropdown}>
      <div className={inputContainer} onClick={onContainerClick}>
        <label htmlFor="searchField"></label>
        <input
          className={input}
          onChange={onSearchedPhraseChange}
          id="searchField"
          placeholder="Search"
          ref={inputRef}
        ></input>
        <div className={iconContainer}>
          <RiSearchLine className={icon} />
        </div>
      </div>
      <DropdownList />
    </Wrapper>
  );
};
export { SearchWithDropdown };
