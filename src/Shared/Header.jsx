import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const MenuList = [
    { title: "Dashboard", link: '/dashboard/home' },
    { title: "Home", link: '/' },
    { title: "Entry Trade", link: '/entryTheTrade' },
    { title: "My Account", link: '/profile' },
    { title: "Blog", link: '/blog' },
    { title: "Contact", link: '/contact' },
]


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)

    return (
        <div className='h-16 bg-headerBgColor sticky top-0 z-50 '>
            <div className='container h-full mx-auto px-4 lg:px-0'>
                <div className='text-white h-full flex justify-between items-center'>
                    <Link to={"/"} className='text-2xl font-bold'>Crypto <span className='text-primaryColor'>Steps.</span></Link>

                    <div className='flex gap-5'>
                        {
                            MenuList?.map((menu, index) => {
                                return (
                                    <ul key={index}>
                                        <li className='uppercase text-sm hidden md:flex font-semibold text-whiteText/90 relative overflow-hidden group '>
                                            <Link to={menu.link} className='hover:text-white/80' >{menu.title}  <span className='inline-flex w-full h-[1px] bg-primaryLinksHoverColor absolute bottom-0 left-0 transform -translate-x-[105%]  group-hover:translate-x-0 duration-300 '></span> </Link>
                                        </li>
                                    </ul>
                                )

                            })
                        }
                    </div>
                    <div className='text-2xl md:hidden cursor-pointer'>
                        {
                            !openMenu ? (
                                <HiMenuAlt3 onClick={() => setOpenMenu(true)} />
                            ) : (
                                <IoClose className='text-red-500' onClick={() => setOpenMenu(false)} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-txtSelectBgColor shadow-sm' />

            {
                openMenu && (
                    <div className='bg-black w-full text-white absolute px-5'>
                        {
                            MenuList?.map((menu, index) => {
                                return (
                                    <ul key={index} className=''>
                                        <li className='uppercase py-2 text-sm flex font-semibold text-whiteText/90 relative overflow-hidden group '>
                                            <Link onClick={() => setOpenMenu(false)} to={menu.link} className='hover:text-white/80' >{menu.title}  <span className='inline-flex w-full h-[1px] bg-primaryLinksHoverColor absolute bottom-0 left-0 transform -translate-x-[105%]  group-hover:translate-x-0 duration-300 '></span> </Link>
                                        </li>
                                    </ul>
                                )

                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Header;