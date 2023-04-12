import React, { useState } from 'react'
import axios from 'axios';
export default function Register() {
    const [getName, setName] = useState('')
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    function submit() {
        axios.post('http://192.168.1.8:3001/register', {
            name: getName,
            email: getEmail,
            password: getPassword
        })
            .then(function () {
                if (getName === "" && getEmail === "" && getPassword === "") {
                    window.location.href = "/Register";
                }
                if (getName.length == 0) {
                    alert("Enter Name");
                } else if (getEmail.length == 0) {
                    alert("Enter Email");
                } else if (getPassword.length == 0) {
                    alert("Enter password");
                }
                else {
                    window.location.href = "/";

                }
            })
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
                            <h1 className='capitalize text-gray-600 text-sm font-bold tracking-wide'>name</h1>
                            <input type="email" name={getName} id="" className='py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm' value={getName} onChange={(e) => setName(e.target.value)} />
                            <h1 className='capitalize text-gray-600 text-sm font-bold mt-6 tracking-wide'>email address</h1>
                            <input type="email" name={getEmail} id="" className='py-2 bg-sky-100 w-full focus:outline-none placeholder:text-sm' value={getEmail} onChange={(e) => setEmail(e.target.value)} />
                            <h1 className='capitalize text-gray-600 text-sm font-bold mt-6 tracking-wide'>password</h1>
                            <input type="password" name={getPassword} id="" className='py-2 bg-sky-100 w-full focus:outline-none' value={getPassword} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='mt-10 bg-orange-600 rounded-full text-center cursor-pointer m-auto'>
                            <button className='capitalize py-3 text-white font-bold block text-center' onClick={submit}>Register</button>
                        </div>
                        <div className='mt-10 text-center capitalize text-gray-600 text-md font-bold tracking-wide'>Already have an account ?
                            <a href='/' className='capitalize text-orange-600 text-md text-right font-bold'> sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
