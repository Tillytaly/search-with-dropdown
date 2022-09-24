import * as yup from "yup";
export const formikSchema = yup.object().shape({
  name: yup.string().required().min(1),
  regularPrice: yup.number().required().positive(),
  salePrice: yup.number().required().positive(),
});
