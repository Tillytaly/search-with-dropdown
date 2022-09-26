import { useState } from "react";
import { AddNewProductForm } from "../AddNewProductForm";
import { Wrapper } from "../Wrapper";
import { CustomButton } from "../CustomButton";
import styles from "./AddNewProduct.module.scss";

const { buttonContainer, button } = styles;

const AddNewProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  if (isFormOpen) {
    return <AddNewProductForm onCloseForm={closeForm} />;
  }

  return (
    <Wrapper className={buttonContainer}>
      <CustomButton onClick={openForm} type="button" className={button}>
        Add New Product
      </CustomButton>
    </Wrapper>
  );
};

export { AddNewProduct };
