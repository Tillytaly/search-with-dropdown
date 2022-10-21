import { PropsWithChildren } from "react";

export interface IProductStoreContext<T> {
  addProduct: (newProduct: T) => void;
  removeProduct: (productId: string) => void;
  availableProducts: T[];
}

export interface ProductStoreProviderProps extends PropsWithChildren {}
