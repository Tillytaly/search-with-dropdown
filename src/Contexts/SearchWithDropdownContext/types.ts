import { UseSearchWithDropdown, ProductData } from "../../Types";

import { PropsWithChildren } from "react";

export interface ISearchWithDropdownContext
  extends UseSearchWithDropdown<ProductData> {}

export interface SearchWithDropdownProviderProps extends PropsWithChildren {}
