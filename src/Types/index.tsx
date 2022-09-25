import { Dispatch, SetStateAction } from "react";
export interface ProductData {
  id: string;
  name: string;
  regularPrice: string
  salePrice:  string
}

export interface PropsWithOnSubmitData {
  onSubmitData: Dispatch<SetStateAction<ProductData[]>>;
}

export interface PropsWithListItems {
  listItems: ProductData[];
}

export interface UseSearchWithDropdown<T> {
  itemListToDisplay: any[];
  onSearchedPhraseChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchedPhrase: string;
  removeItemFromList: (idOfItemToRemove: string) => void;
  addItemToList: (newProduct: T) => void;
}

export interface PropsWithChildren {
  children: React.ReactNode;
}
