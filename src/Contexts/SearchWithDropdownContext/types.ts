import {
  UseSearchWithDropdown,
  ProductData,
  PropsWithChildren,
} from "../../Types";

export interface ISearchWithDropdownContext
  extends UseSearchWithDropdown<ProductData> {}

export interface SearchWithDropdownProviderProps extends PropsWithChildren {}
