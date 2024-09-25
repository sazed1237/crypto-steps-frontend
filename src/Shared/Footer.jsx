import React from 'react';
import { MenuList } from './Header';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='w-full h-full py-10 px-20 bg-gradient-to-b from-headerBgColor from-0% via-primaryColor via-100%  rounded-t-badge'>

            <div className='flex items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Crypto Steps</h1>
                    <p className='text-sm text-white/50 w-1/2 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem dignissimos odio quaerat harum in!</p>
                    <div className='flex gap-3 pb-10'>
                        {
                            MenuList.map((menu, index) => {
                                return (
                                    <ul key={index}>
                                        <li className='text-sm text-white font-semibold text-whiteText/90 relative overflow-hidden group '>
                                            <Link to={menu.link} className='hover:text-white/80' >{menu.title}  <span className='inline-flex w-full h-[1px] bg-primaryLinksHoverColor absolute bottom-0 left-0 transform -translate-x-[105%]  group-hover:translate-x-0 duration-300 '></span> </Link>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl text-white font-semibold'>Stay Connected:</h1>
                    <div className='py-5 text-white/60'>
                        <p>Mirpur 1, Dhaka, Bangladesh</p>
                        <p>+880 100000000</p>
                    </div>
                    <div className='flex items-center gap-x-5 text-3xl text-white'>
                        <IoLogoFacebook className='hover:cursor-pointer hover:text-white/80 duration-200' />
                        <IoLogoInstagram className='hover:cursor-pointer hover:text-white/80 duration-200' />
                        <IoLogoWhatsapp className='hover:cursor-pointer hover:text-white/80 duration-200' />
                    </div>
                </div>
            </div>


            <div className='w-full h-[1px] bg-white shadow-sm' />
            <div className=' container mx-auto px-4 lg:px-0'>
                <div className=' md:flex justify-between gap-4 items-center pt-2 '>
                    <p className='text-sm md:text-base text-white'>@2024 sazed creations. All rights reserved.</p>

                    {/* <img src={payment} className='object-cover' alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;