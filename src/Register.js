import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { registerSchema } from "./registerSchema";
export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        // action.resetForm();
        axios
          .post("http://192.168.1.5:3001/register", {
            name: values.name,
            email: values.email,
            password: values.password,
            age:values.age
          })
          .then(function () {
            if (
              values.name === "" &&
              values.email === "" &&
              values.password === "" &&
              values.age === ""
            ) {
              window.location.href = "/Register";
            } else {
              window.location.href = "/";
            }
          });
      },
    });

  return (
    <div>
      <div className="m-auto">
        <div className="flex justify-between sm:justify-around">
          <div className="image w-1/2 block xl:block lg:block md:block max-sm:hidden max-xs:hidden">
            <img
              src={require("./images/main-image.jpg")}
              alt=""
              className="w-full xs:hidden h-[100vh]"
            />
          </div>
          <div className="login-content py-6 xl:px-32 lg:px-12 md:px-12 max-sm:px-9 xl:w-1/2 lg:w-1/2 md:w-1/2 max-sm:w-full max-xs:w-full">
            <div className="heading">
              <h1 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-4xl capitalize text-orange-600">
                welcome back
              </h1>
              <p className="text-sm">
                Enter your email and password to sign in
              </p>
            </div>
            <div className="login-info mt-10">
              <h1 className="capitalize text-gray-600 text-sm font-bold tracking-wide">
                name
              </h1>
              <input
                autoComplete="off"
                type="name"
                name="name"
                id="name"
                placeholder="name"
                className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
              <h1 className="capitalize text-gray-600 text-sm font-bold mt-6 tracking-wide">
                email address
              </h1>
              <input
                type="email"
                name="email"
                id="email"
                className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <h1 className="capitalize text-gray-600 text-sm font-bold mt-6 tracking-wide">
                password
              </h1>
              <input
                type="password"
                name="password"
                id="password"
                className="py-2 bg-sky-100 w-full focus:outline-none"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <h1 className="capitalize text-gray-600 text-sm font-bold mt-6 tracking-wide">
                Age
              </h1>
              <input
                type="number"
                name="age"
                id="age"
                className="py-2 bg-sky-100 w-full focus:outline-none"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.age && touched.age ? (
                <p className="form-error">{errors.age}</p>
              ) : null}
            </div>
            <div className="mt-20 bg-orange-600 rounded-full cursor-pointer capitalize py-3 text-white font-bold block text-center" onClick={handleSubmit}>
             
                Register
            </div>
            <div className="mt-10 text-center capitalize text-gray-600 text-md font-bold tracking-wide">
              Already have an account ?
              <a
                href="/"
                className="capitalize text-orange-600 text-md text-right font-bold"
              >
                {" "}
                sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
