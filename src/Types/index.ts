export interface ProductData {
  id: string;
  name: string;
  regularPrice: string;
  salePrice: string;
}

export interface UseSearchWithDropdown<T> {
  itemListToDisplay: any[];
  onSearchedPhraseChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchedPhrase: string;
}

export interface PropsWithChildren {
  children: React.ReactNode;
}

export interface PropsWithClassName {
  className: string;
}
