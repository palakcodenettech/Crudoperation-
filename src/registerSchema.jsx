import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  age:Yup.number().min(2).required("Please enter your age")
});
