/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./App.css";
import { signUpSchema } from "./signUpSchema";
import { useUserLoginMutation } from "./services/api";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import  secureLocalStorage  from  "react-secure-storage";
function Login() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const [Login, Loginresult] = useUserLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { isSuccess, isFetching, isError, error } = Loginresult;
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/adduser");
  //     setIsLoading(true);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    if (isSuccess && !isFetching) {
      console.log(Loginresult);
      secureLocalStorage.setItem("email", values.email);
      secureLocalStorage.setItem("token", Loginresult.data.data.token);
      console.log(Loginresult.data.data.token,"token");
      navigate("/adduser");
      setIsLoading(true);
    }
  }, [isSuccess, isFetching]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // setIsLoading(true);
        Login({
          email: values?.email,
          password: values?.password,
        });
        setDisabled(true);
        console.log(values?.email);
        console.log(values?.password);
      },
    });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
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
                    placeholder={
                      errors.email && touched.email
                        ? errors.email
                        : "Enter email"
                    }
                    className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

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
                    placeholder={
                      errors.password && touched.password
                        ? errors.password
                        : "Enter password"
                    }
                    className="py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {/* </form> */}
                <div
                  className="mt-10 bg-orange-600 rounded-full text-center cursor-pointer "
                   
                >
                  <button className="capitalize py-3 text-white font-bold " disabled={disabled} onClick={handleSubmit}>
                    sign in
                  </button>
                </div>

                <div className="mt-10 text-center capitalize text-gray-600 text-md font-bold tracking-wide">
                  don't have an account ?
                  <Link
                    to="/register"
                    className="capitalize text-orange-600 text-md text-right font-bold"
                  >
                    sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
