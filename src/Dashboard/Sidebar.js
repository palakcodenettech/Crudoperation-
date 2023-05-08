import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.clear("");
        navigate("/");
    };
    return (
        <div className="hidden xl:block lg:block md:block">

            <section className='fixed top-[115px] xl:w-[295px] xl:top-[120px] px-[50px] py-8 bg-white lg:top-[115px] md:top-[114px] shadow-xl inset-y-0 overflow-y-auto'>
                <div className="add-btn bg-[#FE634E] xl:text-[18px] xl:py-[20px] lg:py-[15px] lg:text-[16px] text-[18px] text-center rounded-md hidden xl:block">
                    <span className='text-white '>+ new event</span>
                </div>
                <div className="main-menu pt-[15px]">
                    <div className="sidebar-menu">
                        <ul className='pl-0 relative'>
                            <li className=' list-none '>
                                <Link className='block text-[#7e7e7e] text-[18px] no-underline  py-[15px]' to="/dashboard">
                                    <span className="icon xl:text-[1.6rem] lg:text-[1.6rem] md:text-[1.4rem] sm:[1rem] mr-[15px] md:text-center sm:text-center">
                                        <i class="fa-solid fa-server"></i>
                    
                                    </span>
                                    <span className='hidden xl:inline-block '>DashBoard</span>
                                </Link>
                            </li>
                            <li className=' list-none '>
                                <Link className='block text-[#7e7e7e] text-[18px] no-underline  py-[15px] ' to="/adduser">
                                    <span className="icon xl:text-[1.6rem] lg:text-[1.6rem] md:text-[1.4rem] sm:[1rem] mr-[15px] md:text-center sm:text-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </span>
                                    <span className='hidden xl:inline-block '>Cars</span>
                                </Link>
                            </li>
                            <li className=' list-none ' onClick={Logout} >
                                <Link to="/" className='block text-[#7e7e7e] text-[18px] no-underline  py-[15px] '>
                                    <span className="icon xl:text-[1.6rem] lg:text-[1.6rem] md:text-[1.4rem] sm:[1rem] mr-[15px] md:text-center sm:text-center">
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    </span>
                                    <span className='text-red-400 hidden xl:inline-block '>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Sidebar
