import React from 'react';

const Footer = () => {
    return (
        <div className='bg-headerBgColor'>
            <div className='w-full h-[1px] bg-txtSelectBgColor shadow-sm' />
            <div className=' container mx-auto px-4 lg:px-0'>

                <div className=' md:flex justify-between gap-4 items-center py-8 '>
                    <p className='text-sm md:text-base text-white'>@2024 sazed creations. All rights reserved.</p>

                    {/* <img src={payment} className='object-cover' alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;