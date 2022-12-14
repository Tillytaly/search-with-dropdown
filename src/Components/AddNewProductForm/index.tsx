import { useFormik } from "formik";
import { formikSchema } from "../../Validation";
import { v4 as uuid } from "uuid";
import { CrossBtn, CustomInput, CustomButton, Wrapper } from "../index";
import { useProductStoreContext } from "../../Contexts/";
import { AddNewProductFormProps } from "./types";

import styles from "./rwd.module.scss";
const {
  form,
  formContainer,
  button,
  title,
  formHeader,
  FHButtonContainer,
  titleContainer,
  inputContainer,
  formFooter,
} = styles;

const AddNewProductForm = ({ onCloseForm }: AddNewProductFormProps) => {
  const { addProduct } = useProductStoreContext();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values: { regularPrice, salePrice, name },
    errors: {
      regularPrice: regularPriceErr,
      salePrice: salePriceErr,
      name: nameErr,
    },
    touched: {
      regularPrice: isRegularPriceTouched,
      salePrice: isSalePriceTouched,
      name: isNameTouched,
    },
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      regularPrice: "",
      salePrice: "",
    },
    validationSchema: formikSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, regularPrice, salePrice } = values;
      const id = uuid();
      const newProduct = { id, name, regularPrice, salePrice };

      addProduct(newProduct);
      resetForm();
    },
    validateOnChange: false,
  });

  return (
    <Wrapper className={formContainer}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={formHeader}>
          <div className={FHButtonContainer}>
            <CrossBtn onClick={onCloseForm} />
          </div>
          <div className={titleContainer}>
            <h2 className={title}>New Product</h2>
          </div>
        </div>
        <div className={inputContainer}>
          <CustomInput
            id="name"
            label="Name"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={name}
            errorMessage={nameErr}
            touched={isNameTouched}
          />
          <CustomInput
            id="regularPrice"
            label="Regular price"
            type="number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={regularPrice}
            errorMessage={regularPriceErr}
            touched={isRegularPriceTouched}
          />
          <CustomInput
            id="salePrice"
            label="Sale price"
            type="number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={salePrice}
            errorMessage={salePriceErr}
            touched={isSalePriceTouched}
          />
          <div className={formFooter}>
            <CustomButton
              type="submit"
              className={button}
              disabled={!isValid || isSubmitting}
            >
              Submit
            </CustomButton>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export { AddNewProductForm };
