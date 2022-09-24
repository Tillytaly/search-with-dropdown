import { useState } from "react";
import { AddNewProductForm } from "../AddNewProductForm";
import { Wrapper } from "../Wrapper";
import { AddNewProductProps } from "./types";
import styles from "./AddNewProduct.module.scss";

const { buttonContainer, button } = styles;

const AddNewProduct = ({ onSubmitData }: AddNewProductProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  if (isFormOpen) {
    return (
      <AddNewProductForm onSubmitData={onSubmitData} onCloseForm={closeForm} />
    );
  }

  return (
    <Wrapper className={buttonContainer}>
      <button onClick={openForm} type="button" className={button}>
        Add New Product
      </button>
    </Wrapper>
  );
};

export { AddNewProduct };
