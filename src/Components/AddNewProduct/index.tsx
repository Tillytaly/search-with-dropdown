import { useState } from "react";
import { AddNewProductForm } from "../AddNewProductForm";
const AddNewProduct = ({ onSubmitData }: any) => {
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
    <div>
      <button onClick={openForm} type="button">
        Add New Product
      </button>
    </div>
  );
};

export { AddNewProduct };
