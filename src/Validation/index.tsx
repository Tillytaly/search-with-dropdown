import * as yup from "yup";
export const formikSchema = yup.object().shape({
  name: yup.string().required("Required field").min(1),
  regularPrice: yup
    .number()
    .required("Required field")
    .positive("Positive number required"),
  salePrice: yup
    .number()
    .required("Required field")
    .positive("Positive number required"),
});
