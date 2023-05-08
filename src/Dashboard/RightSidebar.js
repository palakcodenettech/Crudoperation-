/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const chartColors = [
    "#214BB8",
    "#FE634E",
    "#21BFE9"
]
ChartJS.register(ArcElement, Tooltip, Legend);
const RightSidebar = () => {
    const options = {
        legend: {
            display: false,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: [],
        datasets: [
            {
                data: [45, 30, 25],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors,
                height:500,
                width:500
            }
        ]
    };
    const sliderOptions = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2,
                center: true
            },
            2000: {
                items: 3,
                center: true
            }
        }
    };
    return (
        <div>
            <div className="pt-[7.5rem]   xl:ml-[18.474rem] lg:ml-[8.600rem] md:ml-[8.600rem] sm:my-0 sm:px-2">
                <div className="dashboard-content px-[15px] pt-[15px] xl:px-[40px] xl:pt-[40px] lg:px-[40px] lg:pt-[40px] md:px-[20px] md:pt-[20px] ">
                    <div className="dashboard-inner">
                        <div className="selling-block">
                            <div className="row justify-between">
                                <div className="col-xl-4">
                                    <div className="row px-2 py-2 justify-between">
                                        <div className="col-xl-12 col-lg-6 col-md-12 ">
                                            <div className=" bg-white shadow-lg rounded-3xl mt-4">
                                                <div className="flex justify-between p-[30px] sm:p-[20px] items-center">
                                                    <h4 className="text-[20px] capitalize">best selling</h4>
                                                    <Menu as="div" className="relative inline-block text-left z-[9]">
                                                        <div>
                                                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                                                Options
                                                                <i class="fa-solid fa-caret-down -mr-1 mt-[0.25rem] h-5 w-5 text-gray-400"></i>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1 flex flex-col">
                                                                    <Menu.Item>
                                                                        <a
                                                                            href="#"
                                                                            className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                            This Week
                                                                        </a>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <a
                                                                            href="#"
                                                                            className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                            Next Week
                                                                        </a>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <a
                                                                            href="#"
                                                                            className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                            This Month
                                                                        </a>
                                                                    </Menu.Item>
                                                                    <form method="POST" action="#">
                                                                        <Menu.Item>
                                                                            <a
                                                                                href="#"
                                                                                className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                                This Month
                                                                            </a>
                                                                        </Menu.Item>
                                                                    </form>
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                                <div class="donut-chart-block   p-[20px]">
                                                        <Doughnut data={data} options={options} className="m-auto" />

                                                </div>
                                                <div class="header-body flex justify-between mt-4 p-[30px]" >
                                                    <div class="pr-[2px]">
                                                        <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="20" height="8" rx="4" fill="#214BB8"></rect>
                                                        </svg>
                                                        <h4 class="text-[18px] text-black mb-[1px] font-semibold">21,512</h4>
                                                        <span class="text-[14px]">Ticket Left</span>
                                                    </div>
                                                    <div class="pr-[2px]">
                                                        <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="20" height="8" rx="4" fill="#FE634E"></rect>
                                                        </svg>
                                                        <h4 class="text-[18px] text-black mb-[1px] font-semibold">45,612</h4>
                                                        <span class="text-[14px]">Ticket Sold</span>
                                                    </div>
                                                    <div class="">
                                                        <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="20" height="8" rx="4" fill="#45ADDA"></rect>
                                                        </svg>
                                                        <h4 class="text-[18px] text-black mb-[1px] font-semibold">275</h4>
                                                        <span class="text-[14px]">Event Held</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6 col-md-12 ">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">

                                            <div className="flex justify-between p-[30px] sm:p-[20px] items-center ">
                                                <h4 className="text-[20px] capitalize">Latest sales</h4>
                                                <Menu as="div" className="relative inline-block text-left z-[9]">
                                                    <div>
                                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                                            Options
                                                            <i class="fa-solid fa-caret-down -mr-1 mt-[0.25rem] h-5 w-5 text-gray-400"></i>
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1 flex flex-col">
                                                                <Menu.Item>
                                                                    <a
                                                                        href="#"
                                                                        className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                        This Week
                                                                    </a>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <a
                                                                        href="#"
                                                                        className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                        Next Week
                                                                    </a>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <a
                                                                        href="#"
                                                                        className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                        This Month
                                                                    </a>
                                                                </Menu.Item>
                                                                <form method="POST" action="#">
                                                                    <Menu.Item>
                                                                        <a
                                                                            href="#"
                                                                            className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                            This Month
                                                                        </a>
                                                                    </Menu.Item>
                                                                </form>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                            <div className="sales-content p-[30px] sm:p-[20px]">
                                                <div className="pb-3 mb-3 border-b">
                                                    <p className="font-semibold">
                                                        The Story’s of Danau Toba (Drama Theater)
                                                    </p>
                                                    <div className="flex items-end">
                                                        <img src={require("./assets/asset 8.jpeg")} alt="user" className="mr-2 rounded-full" />
                                                        <div className="mr-auto">
                                                            <h4 className="mb-0 text-[14px]">Steffany Humble</h4>
                                                            <span className="text-[12px] text-gray-900">2m Ago</span>
                                                        </div>
                                                        <span class=" bg-[#FFD3CD] text-[#FE634E] text-[11px] py-[5px] px-[8px] font-bold rounded-full">4 Ticket</span>
                                                    </div>

                                                </div>
                                                <div className="pb-3 mb-3 border-b">
                                                    <p className="font-semibold">
                                                        Envato Author SF Meetup
                                                    </p>
                                                    <div className="flex items-end">
                                                        <img src={require("./assets/asset 9.jpeg")} alt="user" className="mr-2 rounded-full" />
                                                        <div className="mr-auto">
                                                            <h4 className="mb-0 text-[14px]">Jacob Swing Swing</h4>
                                                            <span className="text-[12px] text-gray-900">6h ago</span>
                                                        </div>
                                                        <span class=" bg-[#FFD3CD] text-[#FE634E] text-[11px] py-[5px] px-[8px] font-bold rounded-full">2 Ticket</span>
                                                    </div>

                                                </div>
                                                <div className="pb-3 mb-3 border-b">
                                                    <p className="font-semibold">
                                                        Envato Atuhor Community Fun Hiking at Sibayak Mountaint
                                                    </p>
                                                    <div className="flex items-end">
                                                        <img src={require("./assets/asset 10.jpeg")} alt="user" className="mr-2 rounded-full" />
                                                        <div className="mr-auto">
                                                            <h4 className="mb-0 text-[14px]">Robert Carloz</h4>
                                                            <span className="text-[12px] text-gray-900">10h ago</span>
                                                        </div>
                                                        <span class=" bg-[#FFD3CD] text-[#FE634E] text-[11px] py-[5px] px-[8px] font-bold rounded-full">1 Ticket</span>
                                                    </div>

                                                </div>
                                                <div className="pb-3 mb-3 border-b">
                                                    <p className="font-semibold">
                                                        Indonesia Envato Authors National Meetup
                                                    </p>
                                                    <div className="flex items-end">
                                                        <img src={require("./assets/asset 11.jpeg")} alt="user" className="mr-2 rounded-full" />
                                                        <div className="mr-auto">
                                                            <h4 className="mb-0 text-[14px]">Kevin Stefanus</h4>
                                                            <span className="text-[12px] text-gray-900">2m ago</span>
                                                        </div>
                                                        <span class=" bg-[#FFD3CD] text-[#FE634E] text-[11px] py-[5px] px-[8px] font-bold rounded-full">1 Ticket</span>
                                                    </div>

                                                </div>
                                                <div className="pb-3 mb-3 border-b">
                                                    <p className="font-semibold">
                                                        Envato Author SF Meetup
                                                    </p>
                                                    <div className="flex items-end">
                                                        <img src={require("./assets/asset 9.jpeg")} alt="user" className="mr-2 rounded-full" />
                                                        <div className="mr-auto">
                                                            <h4 className="mb-0 text-[14px]">Jacob Swing Swing</h4>
                                                            <span className="text-[12px] text-gray-900">6h ago</span>
                                                        </div>
                                                        <span class=" bg-[#FFD3CD] text-[#FE634E] text-[11px] py-[5px] px-[8px] font-bold rounded-full">2 Ticket</span>
                                                    </div>
                                                </div>
                                                <div className="pb-3 mb-3 text-center ">
                                                    <span class=" bg-[#FE634E] text-[#FFffff] px-3 py-2 rounded-full font-bold text-[14px]" >View More</span>
                                                </div>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="row justify-evenly px-2 py-2 ">
                                        <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6 col-sm-6 ">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">
                                                <div className="new-sale-block px-[10px] py-[15px] xl:px-[30px] xl:py-[35px] lg:px-[30px] lg:py-[35px] md:px-[20px] md:py-[25px] flex justify-between items-center">
                                                    <div className="new-sale-block-content">
                                                        <p class="text-[14px] mb-[1px] text-[#7E809B]">New Sales</p>
                                                        <span class="text-[35px] text-black font-semibold">93<i class="fa-solid fa-caret-up text-green-500 ml-1 text-[30px]"></i>
                                                        </span>
                                                    </div>
                                                    <div className="new-sale-block-image h-[85px] w-[124px]">
                                                        <img src={require("./assets/download.png")} alt="chart-icon" className="" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-xxl-6 col-xl-6  col-lg-6 col-md-6 col-sm-6  xl:pl-4">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">

                                                <div className="px-[10px] py-[15px] xl:px-[30px] xl:py-[35px] lg:px-[30px] lg:py-[35px] md:px-[20px] md:py-[25px] flex justify-between items-center">
                                                    <div className="new-sale-block-content">
                                                        <p class="text-[14px] mb-[1px] text-[#7E809B]">Event Held</p>
                                                        <span class="text-[35px] text-black font-semibold">856<i class="fa-solid fa-caret-up text-green-500 ml-1 text-[30px]"></i>
                                                        </span>
                                                    </div>
                                                    <div className="donut-chart">
                                                        <svg className="peity" height="85px" width="5.75rem">
                                                            <path
                                                                d="M 40.25 0 A 40.25 40.25 0 1 1 5.392477497676346 20.124999999999996 L 22.821238748838173 30.1875 A 20.125 20.125 0 1 0 40.25 20.125"
                                                                data-value={5}
                                                                fill="#FE634E"
                                                            />
                                                            <path
                                                                d="M 5.392477497676346 20.124999999999996 A 40.25 40.25 0 0 1 40.24999999999999 0 L 40.24999999999999 20.125 A 20.125 20.125 0 0 0 22.821238748838173 30.1875"
                                                                data-value={1}
                                                                fill="rgba(242, 246, 252)"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12 ">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">

                                                <div className="increase-header px-[10px] py-[15px] xl:px-[25px] xl:py-[35px] lg:px-[25px] lg:py-[35px] md:px-[20px] md:py-[25px]">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="text-[12px] xl:text-[20px] lg:text-[20px] md:text-[15px] sm:text-[15px] capitalize">Increase 25%</h4>
                                                        <Menu as="div" className="relative inline-block text-left z-[9] ">
                                                            <div>
                                                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-[16px]  font-semibold text-gray-900  hover:bg-gray-50">
                                                                    Daily
                                                                    <i class="fa-solid fa-caret-down -mr-1 mt-[0.25rem] h-5 w-5 text-gray-400"></i>
                                                                </Menu.Button>
                                                            </div>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                    <div className="py-1 flex flex-col">
                                                                        <Menu.Item>
                                                                            <a
                                                                                href="#"
                                                                                className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                                Daily
                                                                            </a>
                                                                        </Menu.Item>
                                                                        <Menu.Item>
                                                                            <a
                                                                                href="#"
                                                                                className='bg-gray-100 text-gray-900 block px-1 py-1  text-sm no-underline'>
                                                                                Monthly
                                                                            </a>
                                                                        </Menu.Item>
                                                                        <Menu.Item>
                                                                            <a
                                                                                href="#"
                                                                                className='bg-gray-100 text-gray-900 block px-1 py-1 text-sm no-underline'>
                                                                                Weekly
                                                                            </a>
                                                                        </Menu.Item>

                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </Menu>
                                                    </div>
                                                    <div className="sales-revenue-image">
                                                        <img src={require("./assets/increase.png")} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">

                                                <div className="sales-revenue-header px-[10px] py-[15px] xl:px-[25px] xl:py-[35px] lg:px-[25px] lg:py-[35px] md:px-[20px] md:py-[25px]">
                                                    <div className="flex justify-between items-center">
                                                        <div className="left">
                                                            <h4 className="text-[12px] xl:text-[20px] lg:text-[20px] md:text-[15px] sm:text-[15px] capitalize">Sales Revenue</h4>
                                                        </div>
                                                        <div className="right hidden xl:block lg:block md:block">
                                                            <ul className="list-none flex items-center">
                                                                <li className="bg-[#FE634E] text-white rounded-full px-3 py-2 md:p-1 sm:p-1">Monthly</li>
                                                                <li className="ml-2 xl:ml-8 lg:ml-8 md:ml-4 text-[#8DACB4]">Weekly</li>
                                                                <li className="ml-2 xl:ml-8 lg:ml-8 md:ml-4 text-[#8DACB4]">Daily</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sales-revenue-header-image px-[10px]  xl:p-[25px]  lg:p-[25px]  md:p-[20px] ">
                                                    <img src={require("./assets/sales_revenue.png")} alt="" srcset="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12">
                                            <div className="bg-white shadow-lg rounded-3xl mt-4">

                                                <div className="recent-event-list-header px-[10px] py-[15px] xl:px-[25px] xl:py-[35px] lg:px-[25px] lg:py-[35px] md:px-[20px] md:py-[25px]">
                                                    <div className="flex justify-between items-center">
                                                        <div className="left">
                                                            <h4 className="text-[12px] xl:text-[20px] lg:text-[20px] md:text-[15px] sm:text-[15px] capitalize">Recent Event List</h4>
                                                        </div>
                                                        <div className="right">
                                                            <Menu as="div" className="relative inline-block text-left z-[9]">
                                                                <div>
                                                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                                                        <i class="fa-solid fa-ellipsis-vertical text-gray-500 text-[22px]"></i>
                                                                        {/* <i class="fa-solid fa-caret-down -mr-1 mt-[0.25rem] h-5 w-5 text-gray-400"></i> */}
                                                                    </Menu.Button>
                                                                </div>
                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-100"
                                                                    enterFrom="transform opacity-0 scale-95"
                                                                    enterTo="transform opacity-100 scale-100"
                                                                    leave="transition ease-in duration-75"
                                                                    leaveFrom="transform opacity-100 scale-100"
                                                                    leaveTo="transform opacity-0 scale-95"
                                                                >
                                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                        <div className="py-2 px-2 flex flex-col ">
                                                                            <Menu.Item>
                                                                                <a
                                                                                    href="#"
                                                                                    className='bg-gray-100 text-gray-900 block px-1 py-1 text-[16px] no-underline'>
                                                                                    Details
                                                                                </a>
                                                                            </Menu.Item>
                                                                            <Menu.Item>
                                                                                <a
                                                                                    href="#"
                                                                                    className='bg-gray-100 text-[#FE634E] block px-1 py-1 text-[16px] no-underline'>
                                                                                    Cancel
                                                                                </a>
                                                                            </Menu.Item>
                                                                        </div>
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </Menu>
                                                        </div>
                                                    </div>
                                                    <div className="slider">
                                                        <OwlCarousel className='owl-theme' loop margin={10} dots={false}  {...sliderOptions}>
                                                            <div class='item'>
                                                                <div className="blog border border-[#000000] rounded-2xl">
                                                                    <div className="image-box ">
                                                                        <img src={require("./assets/asset 12.png")} alt="" srcset="" className="w-full rounded-t-2xl" />
                                                                    </div>
                                                                    <div className="info-box p-4">
                                                                        <p class="text-[18px] font-semibold"><span class="text-black">International Live Choice Festivals (2020)</span></p>
                                                                        <span class="text-[14px] text-black block mb-3">Manchester, London</span>
                                                                        <p class="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-dollar-sign text-[#FE634E] mr-[10px]"></i>$124,00</li>
                                                                            <li><i class="fa-regular fa-clock text-[#FE634E] mr-[10px]"></i>08:35 AM</li>

                                                                        </ul>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-ticket text-[#FE634E] mr-[10px]"></i>561 pcs</li>
                                                                            <li><i class="fa-regular fa-calendar-days text-[#FE634E] mr-[10px]"></i>June 20, 2020</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class='item'>
                                                                <div className="blog border border-[#000000] rounded-2xl">
                                                                    <div className="image-box ">
                                                                        <img src={require("./assets/asset 13.png")} alt="" srcset="" className="w-full rounded-t-2xl" />
                                                                    </div>
                                                                    <div className="info-box p-4">
                                                                        <p class="text-[18px] font-semibold"><span class="text-black">Envato Indonesian Authors Meetup 2020</span></p>
                                                                        <span class="text-[14px] text-black block mb-3">Medan, Indonesia</span>
                                                                        <p class="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-dollar-sign text-[#FE634E] mr-[10px]"></i>$124,00</li>
                                                                            <li><i class="fa-regular fa-clock text-[#FE634E] mr-[10px]"></i>08:35 AM</li>

                                                                        </ul>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-ticket text-[#FE634E] mr-[10px]"></i>561 pcs</li>
                                                                            <li><i class="fa-regular fa-calendar-days text-[#FE634E] mr-[10px]"></i>June 20, 2020</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class='item'>
                                                                <div className="blog border border-[#000000] rounded-2xl">
                                                                    <div className="image-box ">
                                                                        <img src={require("./assets/asset 14.png")} alt="" srcset="" className="w-full rounded-t-2xl" />
                                                                    </div>
                                                                    <div className="info-box p-4">
                                                                        <p class="text-[18px] font-semibold"><span class="text-black">Envato Atuhor Community Fun Hiking at Sibayak Mt.</span></p>
                                                                        <span class="text-[14px] text-black block mb-3">London, United Kingdom</span>
                                                                        <p class="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-dollar-sign text-[#FE634E] mr-[10px]"></i>$124,00</li>
                                                                            <li><i class="fa-regular fa-clock text-[#FE634E] mr-[10px]"></i>08:35 AM</li>

                                                                        </ul>
                                                                        <ul className="flex pl-0 justify-between mb-0">
                                                                            <li><i class="fa-solid fa-ticket text-[#FE634E] mr-[10px]"></i>561 pcs</li>
                                                                            <li><i class="fa-regular fa-calendar-days text-[#FE634E] mr-[10px]"></i>June 20, 2020</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSidebar;
