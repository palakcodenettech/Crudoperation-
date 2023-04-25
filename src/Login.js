/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./App.css";
import { signUpSchema } from "./signUpSchema";
function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        // action.resetForm();
        axios
          .post(
            "http://192.168.1.6:8001/login",
            {
              email: values.email,
              password: values.password,
            }
            // {
            //   headers: {
            //     authorization: "Basic U2F0djpTYXR2",
            //   },
            // }
          )
          .then(function (response) {
            console.log(response.status);
            console.log(response.config.data);
            if (response.status == "200") {
              localStorage.setItem("email", values.email);
              localStorage.setItem("token", response.data.data.token);

              console.log(response);
              // window.location.href = "/adduser";
              navigate("/adduser");
            }
            console.log(
              "loginResponse",
              `localStorage set with token value: ${response.data.data.token}`
            );
            console.log(response.data.data.token);
          });
      },
    });
  // console.log(errors);

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

            {/* <form onSubmit={onSubmit}> */}
            <div className="login-info mt-10">
              <h1 className="capitalize text-gray-600 text-sm font-bold tracking-wide">
                email address
              </h1>
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <h1 className="capitalize text-gray-600 text-sm font-bold mt-6 float-left tracking-wide">
                password
              </h1>
              <p className="capitalize text-orange-600 text-xs text-right font-bold mt-6">
                forgot password?
              </p>
              <input
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            {/* </form> */}
            <div
              className="mt-10 bg-orange-600 rounded-full text-center cursor-pointer "
              onClick={handleSubmit}
            >
              <button className="capitalize py-3 text-white font-bold ">
                sign in
              </button>
            </div>

            <div className="mt-10 text-center capitalize text-gray-600 text-md font-bold tracking-wide">
              don't have an account ?
              <a
                href="/register"
                className="capitalize text-orange-600 text-md text-right font-bold"
              >
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
