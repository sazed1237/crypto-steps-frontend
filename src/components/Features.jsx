import React from 'react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { RiSettings2Fill } from 'react-icons/ri';
import { SiSpringsecurity } from 'react-icons/si';
import dashboard from '../assets/dashboard.png'


const Features = () => {
    return (
        <div className='bg-black py-10 grid grid-cols-2 items-center justify-center gap-8'>
            <div className='w-full h-full pl-10 space-y-5'>
                <p className='text-sm font-semibold text-primaryColor'>Our Features</p>
                <h1 className='text-4xl w-1/2 font-bold text-white'>Crypto Steps Key Features</h1>

                <div className='grid grid-cols-2 gap-5 w-full mx-auto '>
                    <div className='space-y-2'>
                        <p><SiSpringsecurity className='bg-primaryColor/15 text-5xl rounded-full p-3 text-primaryTextColor' /></p>
                        <h2 className='text-2xl text-white font-bold '>Advanced Security Measures</h2>
                        <p className='text-sm text-gray-300 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut blanditiis incidunt aspernatur harum similique officia nam, asperiores aliquid. Eius quas culpa est magnam ut mollitia officiis nisi voluptate, quidem quis!</p>
                    </div>

                    <div className='space-y-2'>
                        <p><MdOutlineAccessTimeFilled className='bg-primaryColor/15 text-5xl rounded-full p-3 text-primaryTextColor' /></p>
                        <h2 className='text-2xl text-white font-bold '>Real-time Analytics Dashboard</h2>
                        <p className='text-sm text-gray-300 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut blanditiis incidunt aspernatur harum similique officia nam, asperiores aliquid. Eius quas culpa est magnam ut mollitia officiis nisi voluptate, quidem quis!</p>
                    </div>
                    <div className='space-y-2'>
                        <p><RiSettings2Fill className='bg-primaryColor/15 text-5xl rounded-full p-3 text-primaryTextColor' /></p>
                        <h2 className='text-2xl text-white font-bold '>Customizable Integrations</h2>
                        <p className='text-sm text-gray-300 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut blanditiis incidunt aspernatur harum similique officia nam, asperiores aliquid. Eius quas culpa est magnam ut mollitia officiis nisi voluptate, quidem quis!</p>
                    </div>
                    {/* <div className='space-y-2'>
                        <p><SiSpringsecurity className='bg-primaryColor/15 text-5xl rounded-full p-3 text-primaryTextColor' /></p>
                        <h2 className='text-2xl text-white font-bold '>AI-Powered Automation</h2>
                        <p className='text-sm text-gray-300 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut blanditiis incidunt aspernatur harum similique officia nam, asperiores aliquid. Eius quas culpa est magnam ut mollitia officiis nisi voluptate, quidem quis!</p>
                    </div> */}

                </div>
            </div>
            <div className='h-full w-full'>
                <img src={dashboard} className='h-full object-cover object-left rounded-l-2xl' alt="" />
            </div>
        </div>
    );
};

export default Features;