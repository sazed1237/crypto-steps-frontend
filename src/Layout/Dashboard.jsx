import React, { useEffect, useState } from 'react';
import DashboardHead from '../Pages/Dashboard/DashboardHead';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaList, FaPlus, FaWallet } from 'react-icons/fa6';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LiaChartBar } from "react-icons/lia";
import { PiSealWarningLight } from "react-icons/pi";
import { IoMdHelpCircleOutline } from 'react-icons/io';

const Dashboard = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                {/* Dashboard content */}
                <DashboardHead startDate={startDate} setStartDate={setStartDate} setSelectedDate={setSelectedDate} selectedDate={selectedDate} ></DashboardHead>
                <div className='flex-1 px-3 bg-base-300 '>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet startDate={startDate} selectedDate={selectedDate} ></Outlet>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='flex'>
                    {/* Dashboard side bar */}
                    <div className='w-52 min-h-screen bg-primaryBgColor'>
                        <div className='text-center pt-3 pb-8 text-3xl font-bold'>
                            <h1 className='text-primaryColor'>Crypto <span className='font-light'>steps</span></h1>
                        </div>
                        <div className='text-white mx-2 space-y-5 rounded-md '>
                            <Link className='flex items-center rounded-md hover:bg-btnHoverColor bg-btnBgColor px-2 py-1 gap-2 duration-200 ' to={'/dashboard/addTrade'} > <FaPlus /> Add Trade </Link>
                            {/* <Link className='flex items-center rounded-md bg-gray-500 hover:bg-txtSelectBgColor px-2 py-1 gap-2 duration-200 ' to={'/dashboard/home'} > <LuLayoutDashboard /> Dashboard </Link> */}
                        </div>

                        <ul className='menu uppercase text-white/70 mt-3'>
                            <li className='mb-10 capitalize'><NavLink to={'/'}>
                                <LuLayoutDashboard></LuLayoutDashboard>
                                Dashboard
                            </NavLink></li>


                            <li><NavLink to={'/dashboard/allTrades'}>
                                <FaList></FaList>
                                trade Journal
                            </NavLink></li>

                            {/* <li><NavLink to={'/dashboard/insights'}>
                                <PiSealWarningLight />
                                Insights
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/tradelog'}>
                                <FaWallet></FaWallet>
                                Trade Log
                            </NavLink></li> */}

                            {/* <li><NavLink to={'/dashboard/reports'}>
                                <LiaChartBar />
                                Reports
                            </NavLink></li> */}

                            <li><NavLink to={'/dashboard/help'}>
                                <IoMdHelpCircleOutline />
                                Help
                            </NavLink></li>

                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;