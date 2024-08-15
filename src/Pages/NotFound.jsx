import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { GrOrderedList } from 'react-icons/gr';
import { HiBookOpen, HiHome, HiRss } from 'react-icons/hi';
import { HiBookmarkSquare, HiMiniQueueList } from 'react-icons/hi2';
import { LuChevronRight } from 'react-icons/lu';
import { Link, useLocation, useParams } from 'react-router-dom';


export const links = [
    {
        title: "Home",
        href: '/',
        icons: HiHome,
        description: "You will find all Available trades.",
    },
    {
        title: "Entry Trade",
        href: '/product',
        icons: HiMiniQueueList,
        description: "You can add your add your trades",
    },
    {
        title: "My Account",
        href: '/profile',
        icons: HiBookmarkSquare,
        description: "Find your information here.",
    },
    {
        title: "Blog",
        href: '/blog',
        icons: HiRss,
        description: "Read our latest news and articles on shopping.",
    },
]


const NotFound = () => {

    const location = useLocation()
    const pathName = location.pathname
    const path = pathName.split("/").filter(Boolean).pop()


    return (
        <div className='bg-white'>
            <div className='px-6 pb-16 pt-10 sm:pb-24 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-primaryColor text-4xl font-bold leading-8'>404</h1>

                    <h2 className='text-3xl font-bold tracking-tight text-darkText mt-2'>
                        <span className='text-red-500 underline underline-offset-2 decoration-[1px] capitalize'>{path}</span> does not exist
                    </h2>

                    <p className='text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 mt-3 sm:mt-6'>Sorry, we couldn’t find the {path} page you’re looking for.</p>
                </div>

                <div className='max-w-lg mx-auto mt-6 flow-root'>
                    <h2 className='sr-only'>Popular pages</h2>

                    <ul
                        role="list"
                        className="divide-y divide-gray-900/5 border-b border-gray-900/5 flex flex-col"
                    >
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="relative flex gap-x-6 py-4 hover:bg-sky-400/20 px-4 rounded-md"
                            >
                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                                    <link.icons
                                        className="h-6 w-6 text-primaryColor"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="flex-auto">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                        <a href={link.href}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {link.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        {link.description}
                                    </p>
                                </div>

                                <div className="flex-none self-center">
                                    <LuChevronRight
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className='flex justify-center mt-10'>
                        <Link to={'/'} className='flex items-center gap-1 bg-darkText/80 text-white px-4 py-2 rounded-full hover:bg-darkText duration-200'> <BsArrowLeft /> Start Shopping</Link>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default NotFound;