import * as Yup from "yup";
export const addUserSchema = Yup.object({
    name: Yup.string().required(" "),
    color: Yup.string().required("Please enter color"),
    brand: Yup.string().min(2).max(25).required("Please enter brand"),
    price:Yup.number().min(1).required("Please enter correct price")
  });