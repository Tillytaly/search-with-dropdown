import { Dispatch, SetStateAction } from "react";
export interface ProductData {
  name: string;
  regularPrice: number;
  salePrice: number;
}

export interface PropsWithOnSubmitData {
  onSubmitData: Dispatch<SetStateAction<ProductData[]>>;
}

export interface PropsWithListItems {
  listItems: ProductData[];
}
