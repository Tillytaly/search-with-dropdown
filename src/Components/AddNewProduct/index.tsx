import { CustomInput } from "../CustomInput";
import { useFormik } from "formik";
import styles from "./AddNewProduct.module.scss";
import * as yup from "yup";
const { form, formContainer, button, title } = styles;

const formikSchema = yup.object().shape({
  name: yup.string().required().min(1),
  regularPrice: yup.number().required().positive(),
  salePrice: yup.number().required().positive(),
});

const AddNewProduct = () => {
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
      console.log(values);
      resetForm();
    },
    validateOnChange: false,
  });

  console.log(salePriceErr);

  return (
    <div className={formContainer}>
      <form onSubmit={handleSubmit} className={form}>
        <h2 className={title}>Add new product</h2>
        <CustomInput
          id="name"
          label="Product name"
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
    </div>
  );
};

export { AddNewProduct };
