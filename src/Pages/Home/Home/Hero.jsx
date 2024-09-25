import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../../../assets/dashboard.PNG'

const Hero = () => {
    return (
        <div className='w-full h-full  bg-gradient-to-b from-headerBgColor from-0% via-primaryColor via-69% to-white to-100% text-center '>
            <div className='pt-14 space-y-2'>
                <p className='text-primaryDarkColor'>Welcome to Crypto Steps.</p>
                <h1 className='text-5xl w-8/12 mx-auto font-bold text-white'>Elevate Your Crypto Experience with Crypto Steps</h1>
                <p className='text-xs pt-2 text-white/50 w-6/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi laboriosam voluptas nam tenetur a voluptate porro, tempore fugit mollitia odio soluta totam, officia consequuntur magnam doloribus unde. Laudantium, odio?</p>

                <div className='space-x-5 pt-10'>
                    <Link to={'/login'} className='font-semibold px-4 py-1.5 hover:bg-secondaryBgColor duration-300 hover:text-white rounded-full  bg-white text-black'>Sing Up Free</Link>
                    <Link className='font-semibold px-4 py-1.5 hover:bg-secondaryBgColor duration-300 hover:border-none rounded-full border bg-transparent text-white'>Join Community</Link>
                </div>
            </div> 

            <div className='w-8/12 mx-auto py-14'>
                <img src={dashboard} className='rounded-3xl drop-shadow-2xl' alt="" />
            </div>

            {/* <p className='text-start'>hero</p> */}
        </div>
    );
};

export default Hero;