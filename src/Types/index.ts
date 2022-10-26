export interface ProductData {
  id: string;
  name: string;
  regularPrice: string;
  salePrice: string;
}

export interface UseSearchWithDropdown<T> {
  itemListToDisplay: T[];
  onSearchedPhraseChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchedPhrase: string;
}

export interface PropsWithClassName {
  className: string;
}
