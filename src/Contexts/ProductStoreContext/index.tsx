export {};
import { ProductData } from "../../Types";
import { createContext, useContext, useState, useCallback } from "react";
import { initialSearchData } from "../../dummyData";
import { IProductStoreContext, ProductStoreProviderProps } from "./types";

const ProductStoreContext =
  createContext<null | IProductStoreContext<ProductData>>(null);

export const ProductStoreProvider = ({
  children,
}: ProductStoreProviderProps) => {
  const [availableProducts, setAvailableProducts] =
    useState<ProductData[]>(initialSearchData);

  const addProduct = useCallback((newProduct: ProductData) => {
    setAvailableProducts((prevProducts) => {
      return [...prevProducts, newProduct];
    });
  }, []);

  const removeProduct = useCallback((productId: string) => {
    const copiedProductStore = [...availableProducts];
    const indexOfItemToRemove = copiedProductStore.findIndex(
      ({ id }) => id === productId
    );

    if (indexOfItemToRemove === -1) return;

    copiedProductStore.splice(indexOfItemToRemove, 1);

    setAvailableProducts(copiedProductStore);
  }, []);

  return (
    <ProductStoreContext.Provider
      value={{ addProduct, removeProduct, availableProducts }}
    >
      {children}
    </ProductStoreContext.Provider>
  );
};

export const useProductStoreContext = () => {
  const productStoreContext = useContext(ProductStoreContext);

  if (!productStoreContext) throw new Error("No context provided!");

  return productStoreContext;
};
