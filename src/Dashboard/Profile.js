/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useState } from "react";
const Profile = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.clear("");
        navigate("/");
    };
    const [hide, setHide] = useState(1)
    return (
        <div>
            <header className="z-10 fixed w-full xl:fixed xl:w-full lg:fixed lg:w-full md:inline md:w-full sm:inline sm:w-full border-b-solid border-b-[#EEEEEE] border-b">
                <div className=" bg-white z-[4] content py-8 flex justify-center md:justify-between md:text-center">
                    <div className="logo-image flex items-center  xxl:px-[50px] xl:px-[50px] lg:px-[50px] md:px-[45px] sm:px-[40px] ">
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
                            className="ml-[10px] h-[25px] hidden xl:block "
                        />
                    </div>
                    <div className="container">
                        <div className="menu flex items-center justify-between  pl-0 pr-0 xl:pl-[5.30rem] xl:pr-[2.4rem] lg:pl-[8rem] lg:pr-[1.5rem] md:pl-[2rem] md:pr-[1rem] ">
                            <div className="left-content flex items-center">
                                <div className="menu-icon">
                                    <i class="fa-solid fa-bars text-[24px] text-[#FE634E]"></i>
                                </div>
                                <div className="main-heading pl-3 text-[20px] hidden xl:block md:block lg:block">
                                    <h2>App Profile</h2>
                                </div>
                            </div>
                            <div className="right-content flex items-center">
                                <div className="search-bar hidden xl:block">
                                    <input
                                        type="text"
                                        name=""
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
                                <div className="profile-image pl-4">
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
                                                            <i className="fa-solid fa-user text-[#FE634E]"></i>
                                                            <Link
                                                                to="/profile"
                                                                className="bg-gray-100 text-gray-900 block px-1 py-2 text-sm no-underline"
                                                            >
                                                                Profile
                                                            </Link>
                                                        </div>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <div className="flex items-center ">
                                                            <i class="fa-solid fa-envelope text-[#2d6a29]"></i>
                                                            <Link className="bg-gray-100 text-gray-900 block px-1 py-2 text-sm no-underline">
                                                                Inbox
                                                            </Link>
                                                        </div>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <div
                                                            className="flex items-center text-[#FE634E]"
                                                            onClick={Logout}
                                                        >
                                                            <i class="fa-solid fa-ban"></i>
                                                            <Link
                                                                to="/"
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
            <Sidebar />
            <div className="pt-[7.5rem]   xl:ml-[18.474rem] lg:ml-[8.600rem] md:ml-[8.600rem] sm:my-0 sm:px-2">
                <div className="dashboard-content px-[15px] pt-[15px] xl:px-[40px] xl:pt-[40px] lg:px-[40px] lg:pt-[40px] md:px-[20px] md:pt-[20px] ">
                    <div className="page-title my-8">
                        <span className="text-[20px] text-[#656773]">App / <span className="text-[#FE634E] font-semibold">Profile</span></span>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="bg-white shadow-lg rounded-3xl py-3 px-3">

                                <div className="profile align-middle">
                                    <img src={require("./assets/cover.jpg")} alt="" />
                                </div>
                                <div className="profile-info py-[15px] px-[20px] block xl:flex lg:flex md:flex items-start justify-center xl:justify-start lg:justify-start md:justify-start">
                                    <div className="profile-photo max-w-[100%]  z-[1] img-fluid   -mt-[54px]">
                                        <div className="w-[80px] h-[80px]  md:w-[100px] md:h-[100px] mx-auto xl:mr-[10px] lg:mr-[10px] md:mr-[10px]">
                                            <img src={require("./profilepage_assets/asset 8.png")} alt="" className="" />
                                        </div>
                                    </div>
                                    <div class="profile-details  block xl:flex lg:flex md:flex items-end text-center ">
                                        <div className=" block xl:flex lg:flex md:flex">
                                            <div class="profile-name px-3 pt-2">
                                                <h4 class="text-[#FE634E] mb-0 text-[1.125rem]">Mitchell C. Shay</h4>
                                                <p>UX / UI Designer</p>
                                            </div>
                                            <div class="profile-email px-2 pt-2">
                                                <h4 class="text-[#000] mb-0 text-[1.125rem]">info@example.com</h4>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="dropdown ml-auto">
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li><i class="fa fa-user-circle text-[#FE634E] mr-2"></i> View profile</li>
                                                    <li><i class="fa fa-users text-[#FE634E] mr-2"></i> Add to close friends</li>
                                                    <li><i class="fa fa-plus text-[#FE634E] mr-2"></i> Add to group</li>
                                                    <li><i class="fa fa-ban text-[#FE634E] mr-2"></i> Block</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-4 mt-4">
                            <div className="p-[1.80rem] bg-white shadow-lg rounded-3xl px-[25px] py-[25px]">
                                <div className="profile-section-first">
                                    <div className="text-center">
                                        <div className="row">
                                            <div class="col">
                                                <h3 class="m-b-0 text-[1.5rem] text-[#333]">150</h3><span className="text-[#777] text-[1rem]">Follower</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0 text-[1.5rem] text-[#333]">140</h3><span className="text-[#777] text-[1rem]">Place Stay</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0 text-[1.5rem] text-[#333]">45</h3><span className="text-[#777] text-[1rem]"> Reviews</span>
                                            </div>
                                        </div>
                                        <div className="my-5 flex justify-center items-center">
                                            <p className=" p-3 mb-0 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl">Follow</p>
                                            <p className=" p-3 mb-0 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl">Send Message</p>
                                        </div>
                                        <div className="profile-blog">
                                            <div className="header flex justify-between">
                                                <h5 className="text-[#FE634E] text-[18px]">Today Highlights</h5>
                                                <span className="text-[#777] text-right text-lg">More</span>
                                            </div>
                                            <img src={require("./profilepage_assets/asset 9.jpeg")} alt="" srcset="" className="w-full" />
                                            <h4 className="text-left mt-4"><span className="text-black text-[22px]">Darwin Creative Agency Theme</span></h4>
                                            <p class="mb-0 text-left text-[#777]">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        </div>
                                        <div className="image-section mt-5">
                                            <h5 className="text-[#FE634E] text-[18px] text-left">Interest</h5>
                                            <div className="row my-4">
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img
                                                        src={require("./profilepage_assets/asset 10.jpeg")}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img src={require('./profilepage_assets/asset 11.jpeg')} alt="" />
                                                </div>
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img src={require('./profilepage_assets/asset 12.jpeg')} alt="" />
                                                </div>
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img src={require('./profilepage_assets/asset 12.jpeg')} alt="" />
                                                </div>
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img src={require('./profilepage_assets/asset 11.jpeg')} alt="" />
                                                </div>
                                                <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6 px-1">
                                                    <img src={require('./profilepage_assets/asset 10.jpeg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-section mt-5">
                                            <h5 className="text-[#FE634E] text-[18px] text-left">Our Latest News</h5>
                                            <div className="pt-2 pb-4 flex items-start">
                                                <img src={require('./profilepage_assets/asset 13.jpeg')} className="h-[5rem] rounded-3xl mr-4 w-54rem]" alt="" />
                                                <div className="flex-1 text-left">
                                                    <h5 className="mb-2"><a href="#" className="text-black no-underline text-sm md:text-xl">Collection of textile samples</a></h5>
                                                    <p className="mb-0 text-[1rem]">I shared this on my fb wall a few months back, and I thought</p>
                                                </div>
                                            </div>
                                            <div className="pt-2 pb-4 flex items-start">
                                                <img src={require('./profilepage_assets/asset 14.jpeg')} className="h-[5rem] rounded-3xl mr-4 w-[5rem]" alt="" />
                                                <div className="flex-1 text-left">
                                                    <h5 className="mb-2"><a href="#" className="text-black no-underline text-sm md:text-xl">Collection of textile samples</a></h5>
                                                    <p className="mb-0 text-[1rem]">I shared this on my fb wall a few months back, and I thought</p>
                                                </div>
                                            </div>
                                            <div className="pt-2 pb-4 flex items-start">
                                                <img src={require('./profilepage_assets/asset 15.jpeg')} className="h-[5rem] rounded-3xl mr-4 w-[5rem]" alt="" />
                                                <div className="flex-1 text-left">
                                                    <h5 className="mb-2"><a href="#" className="text-black no-underline text-sm md:text-xl">Collection of textile samples</a></h5>
                                                    <p className="mb-0 text-[1rem]">I shared this on my fb wall a few months back, and I thought</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 mt-4">
                            <div className="bg-white shadow-lg rounded-3xl px-[30px] py-[25px]">
                                <ul className="nav nav-tabs list-none border-b border-[#777] flex px-[16px] py-[8px] text-center">
                                    <li onClick={() => setHide(1)} className={`${hide === 1 ? "text-[#FE634E] underline decoration-[#FE634E] decoration-2  underline-offset-[14px] " : "text-gray-600"}`}>
                                        <span className="text-[16px] mr-[30px] ">Posts</span>
                                    </li>
                                    <li onClick={() => setHide(2)} className={`${hide === 2 ? "text-[#FE634E] underline decoration-[#FE634E] decoration-2  underline-offset-[14px] " : "text-gray-600"}`}>
                                        <span className="text-[16px] mr-[30px] ">About Me</span>
                                    </li>
                                    <li onClick={() => setHide(3)} className={`${hide === 3 ? "text-[#FE634E] underline decoration-[#FE634E] decoration-2  underline-offset-[14px] " : "text-gray-600"}`}>
                                        <span className="text-[16px] mr-[30px] ">Setting</span>
                                    </li>
                                </ul>
                                <div className={`about ${hide === 1 ? "block" : "hidden"}`}>

                                    <div className="my-post-content pt-4 ">
                                        <div className="post-input">
                                            <textarea name="textarea" id="textarea" cols="30" rows="5" class="form-control bg-transparent" placeholder="Please type what you want...."></textarea>
                                            <div className="button-group my-5 mx-0 flex">
                                                <span className=" py-[0.938rem] px-[1rem] mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#ffd3cd] rounded-full xl:rounded-xl">
                                                    <i class="fa-solid fa-link text-[#FE634E] text-[1rem]"></i>
                                                </span>
                                                <span className=" py-[0.938rem] px-[1rem] mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#ffd3cd] rounded-full xl:rounded-xl">
                                                    <i class="fa-solid fa-camera text-[#FE634E] text-[1rem]"></i>
                                                </span>
                                                <span className=" py-3 px-4 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl">Post</span>
                                            </div>
                                            <div className="profile-image">
                                                <div className="image-section my-4">
                                                    <img src={require("./profilepage_assets/asset 16.jpeg")} alt="" />
                                                </div>
                                                <div className="content   mt-3">
                                                    <h5 className="mb-2 "><a href="#" className="text-black no-underline text-xl md:text-2xl">Collection of textile samples lay spread</a></h5>
                                                    <p class="mb-0 text-left text-[#777] text-lg leading-7">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                                                </div>
                                                <div className="button-group flex my-3">
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart"></i>Like</p>
                                                    </div>
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#777] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart text-white"></i>Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-image">
                                                <div className="image-section my-4">
                                                    <img src={require("./profilepage_assets/asset 17.jpeg")} alt="" />
                                                </div>
                                                <div className="content mt-3">
                                                    <h5 className="mb-2 "><a href="#" className="text-black no-underline text-xl md:text-2xl">Collection of textile samples lay spread</a></h5>
                                                    <p class="mb-0 text-left text-[#777] text-lg leading-7">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                                                </div>
                                                <div className="button-group flex my-3">
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart"></i>Like</p>
                                                    </div>
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#777] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart text-white"></i>Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-image">
                                                <div className="image-section my-4">
                                                    <img src={require("./profilepage_assets/asset 17.jpeg")} alt="" />
                                                </div>
                                                <div className="content mt-3">
                                                    <h5 className="mb-2 "><a href="#" className="text-black no-underline text-xl md:text-2xl">Collection of textile samples lay spread</a></h5>
                                                    <p class="mb-0 text-left text-[#777] text-lg leading-7">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.</p>
                                                </div>
                                                <div className="button-group flex my-3">
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart"></i>Like</p>
                                                    </div>
                                                    <div>
                                                        <p className=" p-3 py-3 mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#777] rounded-full xl:rounded-xl"><i class="fa-solid fa-heart text-white"></i>Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className={`about ${hide === 2 ? "block" : "hidden"}`}>
                                    <div className="profile-about-me py-2">
                                        <h4 className="text-[#FE634E] font-semibold">About Me</h4>
                                        <p className="mb-2  text-[#777] text-sm md:text-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                                        <p className="mb-2 text-sm md:text-lg text-[#777]">A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                                    </div>
                                    <div className="skills mb-4">
                                        <h4 className="text-[#FE634E] text-lg md:text-xl mb-2">
                                            Skills
                                        </h4>
                                        <div className="flex  flex-wrap ">
                                            <a
                                                href="#"
                                                className="text-center  hover:text-white text-[#FE634E] mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs blcok md:text-sm font-medium">
                                                    Admin
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-center hover:text-white text-[#FE634E] mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs md:text-sm font-medium">
                                                    Dashboard
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-center hover:text-white text-[#FE634E] mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs md:text-sm font-medium">
                                                    Photoshop
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-center hover:text-white text-[#FE634E]  mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs md:text-sm font-medium">
                                                    Bootstrap
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-center hover:text-white text-[#FE634E] mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs md:text-sm font-medium">
                                                    Responsive
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className=" text-center hover:text-white text-[#FE634E] mb-2 hover:bg-[#FE634E] no-underline rounded-2xl bg-[#ffd3cd] border-[#c5dafc]  mr-2 px-2 md:px-3 py-1 md:py-2  "
                                            >
                                                <span class=" hover:text-white text-xs md:text-sm font-medium">
                                                    Crypto
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="language mb-4">
                                        <h4 className="text-[#FE634E] text-lg md:text-xl mb-2">
                                            Language
                                        </h4>
                                        <a
                                            href="#"
                                            className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                                        >
                                            English
                                        </a>
                                        <a
                                            href="#"
                                            className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                                        >
                                            French
                                        </a>
                                        <a
                                            href="#"
                                            className="pr-4 text-[#89879f] text-xs md:text-lg no-underline"
                                        >
                                            Bangla
                                        </a>
                                    </div>
                                    <div className="info mb-4">
                                        <h4 className="text-[#FE634E] text-lg md:text-xl mb-4">
                                            Personal Information
                                        </h4>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Name <span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    Mitchell C.Shay
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Email <span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    example@examplel.com
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Availability <span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    Full Time (Free Lancer)
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Age <span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    27
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Location<span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    Rosemont Avenue Melbourne, Florida
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-3 col-5">
                                                <h5 className="font-medium text-sm md:text-lg">
                                                    Year Experience <span>:</span>
                                                </h5>
                                            </div>
                                            <div className="col-sm-9 col-7">
                                                <span className="font-normal text-[#737B8B] text-xs md:text-sm">
                                                    07 Year Experiences
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`setting ${hide === 3 ? "block" : "hidden"}`}>
                                    <div className="pt-3 pb-4">
                                        <h4 className="text-[#FE634E] text-lg md:text-xl">
                                            Account Setting
                                        </h4>
                                        <form action="" className="text-sm md:text-lg">
                                            <div className="row text-[#737B8B] font-normal ">
                                                <div className="mb-4 col-md-6">
                                                    <label className="mb-2">Email</label>
                                                    <input type="email" placeholder="Email" className="form-control"/>
                                                </div>
                                                <div className="mb-4 col-md-6">
                                                    <label className="mb-2">Password</label>
                                                    <input type="password" placeholder="Email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="mb-2">Address</label>
                                                <input type="text" placeholder="Address" className="form-control"/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="mb-2">Address2</label>
                                                <input type="text" placeholder="Address2" className="form-control"/>
                                            </div>
                                            <div className="row text-[#737B8B] font-normal">
                                                <div className="mb-4 col-md-6">
                                                    <label className="form-label">City</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class="mb-4 col-md-4 ">
                                                    <label class="form-label">State</label>
                                                    <select class="form-control w-[80px] md:w[100px] ">
                                                        <option className="text-xs md:text-lg">Choose...</option>
                                                        <option className="text-xs md:text-lg">Option 1</option>
                                                        <option className="text-xs md:text-lg">Option 2</option>
                                                        <option className="text-xs md:text-lg">Option 3</option>
                                                    </select>
                                                </div>
                                                <div class="mb-4 col-md-2">
                                                    <label class="form-label">Zip</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <div class="form-check custom-checkbox">
                                                    <input type="checkbox" class="form-check-input" id="gridCheck"/>
                                                    <label class="form-check-label form-label" for="gridCheck"> Check me out</label>
                                                </div>
                                            </div>
                                            <button>
                                                <p className="px-3 py-2 md:px-3 md:py-3 mb-0  mr-1 text-[12px] md:text-[16px] font-medium text-white bg-[#FE634E] rounded-full xl:rounded-xl">Sign In</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;