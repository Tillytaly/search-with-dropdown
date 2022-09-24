import { CustomInput } from "../CustomInput";
import { ProductData } from "../../Types";
import { useFormik } from "formik";
import { formikSchema } from "../../Validation";
import { CrossBtn } from "../CrossBtn";
import { Wrapper } from "../Wrapper";
import styles from "./AddNewProductForm.module.scss";

const {
  form,
  formContainer,
  button,
  title,
  formHeader,
  buttonContainer,
  titleContainer,
} = styles;

const AddNewProductForm = ({ onSubmitData, onCloseForm }: any) => {
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
      onSubmitData((prevData: ProductData[]) => [
        ...prevData,
        { name, regularPrice, salePrice },
      ]);
      resetForm();
    },
    validateOnChange: false,
  });

  return (
    <Wrapper className={formContainer}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={formHeader}>
          <div className={buttonContainer}>
            <CrossBtn onClick={onCloseForm} />
          </div>
          <div className={titleContainer}>
            <h2 className={title}>New product</h2>
          </div>
        </div>
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
        <button
          type="submit"
          className={button}
          disabled={!isValid || isSubmitting}
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export { AddNewProductForm };
