/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../all.min.css";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.removeItem();
        navigate("/");
    };
    return (
        <header className="z-10 fixed w-full xl:fixed xl:w-full lg:fixed lg:w-full md:inline md:w-full sm:inline sm:w-full border-b-solid border-b-[#EEEEEE] border-b">
            <div className=" bg-white z-[4] content py-8 flex justify-between md:text-center items-center">
                <div className="logo-image flex items-center px-[10px] xxl:px-[50px] xl:px-[50px] lg:px-[50px] md:px-[45px] sm:px-[40px] ">
                    <img
                        src={require("./assets/asset 0.png")}
                        alt="logo"
                        srcset=""
                        className="w-[40px] xl:w-[55px] lg:w-[50px] md:w-[48px]"
                    />
                    <img
                        src={require("./assets/asset 1.png")}
                        alt="logo-text"
                        srcset=""
                        className="ml-[10px] h-[25px] hidden xl:block"
                    />
                </div>
                <div className="container">
                    <div className="menu flex items-center justify-between  pl-0 pr-0 xl:pl-[5.30rem] xl:pr-[2.4rem] lg:pl-[8rem] lg:pr-[1.5rem] md:pl-[2rem] md:pr-[1rem] ">
                        <div className="left-content flex items-center">
                            <div className="menu-icon">
                                <i class="fa-solid fa-bars text-[24px] text-[#FE634E]"></i>
                            </div>
                            <div className="main-heading pl-3 text-[20px] hidden xl:block md:block lg:block">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                        <div className="right-content flex items-center">
                            <div className="search-bar hidden xl:block">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Search here"
                                    className="bg-[#f4f6facc] border-t border-r-0 border-b border-l rounded-tl-full rounded-bl-full p-[12px] focus-visible:outline-none "
                                />
                                <span className="p-[13px] bg-[#f4f6facc] rounded-tr-full rounded-br-full border-t border-r border-b border-l-0">
                                    <i class="fa-solid fa-magnifying-glass text-[24px] text-[#7e7e7e] font-light"></i>
                                </span>
                            </div>
                            <div className="bell-icon pl-4">
                                <i class="fa-regular fa-bell text-[20px] p-[15px] bg-[#FFF7F6] rounded-full text-[#FE634E]"></i>
                            </div>
                            <div className="message-icon pl-4">
                                <i class="fa-regular fa-message text-[20px] p-[15px] bg-[#FFF7F6] rounded-full text-[#FE634E]"></i>
                            </div>
                            <div className="profile-image pl-4 ">
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left z-[9]"
                                >
                                    <Menu.Button className="w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                        <div className="h-[39px] xl:h-[55px] lg:h-[45px]">
                                            <img
                                                src={require("./assets/asset 7.jpeg")}
                                                alt=""
                                                className="rounded-full xl:rounded-lg h-full"
                                            />
                                        </div>
                                    </Menu.Button>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >

                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right px-4 py-2 rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1 flex flex-col">
                                                <Menu.Item>
                                                    <div className="flex items-center ">
                                                        <i className="fa-regular fa-user text-[#FE634E] mr-[10px]"></i>
                                                        <Link to='/profile'
                                                            className="bg-gray-100 text-gray-900 block px-1 py-2 text-sm no-underline"
                                                        >
                                                            Profile
                                                        </Link>
                                                    </div>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <div className="flex items-center ">
                                                        <i class="fa-regular fa-envelope text-[#43af3b] mr-[10px]"></i>
                                                        <Link
                                                            className="bg-gray-100 text-gray-900 block px-1 py-2 text-sm no-underline"
                                                        >
                                                            Inbox
                                                        </Link>
                                                    </div>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <div className="flex items-center text-[#FE634E] mr-[10px]" onClick={Logout}>
                                                    <i class="fa-solid fa-right-from-bracket text-[#FE634E] mr-[10px]"></i>
                                                        <Link to="/"
                                                            className="bg-gray-100 text-gray-900 block px-1 py-2 text-sm no-underline"
                                                        >
                                                            Logout
                                                        </Link>
                                                    </div>
                                                </Menu.Item>

                                            </div>
                                        </Menu.Items>

                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
