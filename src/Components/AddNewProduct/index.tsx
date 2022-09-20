import { CustomInput } from "../CustomInput";
import styles from "./AddNewProduct.module.scss"
const AddNewProduct = () => {
  return (
    <div>
      <form >
        <CustomInput id="name" label="Product name" type="text" />
        <CustomInput id="regularPrice" label="Regular price" type="number"/>
        <CustomInput id="salePrice" label="Sale price" type="number"/>
      </form>
    </div>
  );
};

export { AddNewProduct };
