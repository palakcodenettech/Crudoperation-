/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import axios from 'axios'
import './App.css';
function Login() {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const submit = () => {
    axios.post('http://192.168.1.8:3001/login', {
      email: getEmail,
      password: getPassword,

    }, {
      headers: {
        authorization: 'Basic U2F0djpTYXR2'
      }
    })
      .then(function (response) {
        console.log(response.status);
        console.log(response.config.data);
        if (response.status == "200") {
          window.localStorage.setItem("email", response.data.data.email);
          // window.localStorage.setItem(
          //   "password",
          //   response.config.data.password
          // );
          window.location.href = "/adduser";
        }
        // Window.location.reload(false);

      });
  }

  return (
    <div>
      <div className="m-auto">
        <div className="flex justify-between sm:justify-around">
          <div className="image w-1/2 block xl:block lg:block md:block max-sm:hidden max-xs:hidden">
            <img src={require("./images/main-image.jpg")} alt="" className='w-full xs:hidden h-[100vh]' />
          </div>
          <div className="login-content py-6 xl:px-32 lg:px-12 md:px-12 max-sm:px-9 xl:w-1/2 lg:w-1/2 md:w-1/2 max-sm:w-full max-xs:w-full">
            <div className="heading">
              <h1 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-4xl capitalize text-orange-600'>welcome back</h1>
              <p className='text-sm'>Enter your email and password to sign in</p>
            </div>

            <div className="login-info mt-10">
              <h1 className='capitalize text-gray-600 text-sm font-bold tracking-wide'>email address</h1>
              <input type="email" name={getEmail} id="" className='py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm' value={getEmail} onChange={(e) => setEmail(e.target.value)} />
              <h1 className='capitalize text-gray-600 text-sm font-bold mt-6 float-left tracking-wide'>password</h1><p className='capitalize text-orange-600 text-xs text-right font-bold mt-6'>forgot password?</p>
              <input type="password" name={getPassword} id="" className='py-2 bg-sky-100 w-full focus:outline-none' value={getPassword} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='mt-10 bg-orange-600 rounded-full text-center cursor-pointer ' onClick={submit}>
              <button type="submit" className='capitalize py-3 text-white font-bold ' >sign in</button>
            </div>

            <div className='mt-10 text-center capitalize text-gray-600 text-md font-bold tracking-wide'>don't have an account ?
              <a href='/register' className='capitalize text-orange-600 text-md text-right font-bold'> sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
