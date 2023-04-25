import * as Yup from "yup";
export const addUserSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter name"),
    color: Yup.string().required("Please enter color"),
    brand: Yup.string().min(2).max(25).required("Please enter brand"),
    price:Yup.number().min(1).required("Please enter correct price")
  });