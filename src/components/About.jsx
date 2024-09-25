import React from 'react';
import journey from '../assets/journey.jpg'

const About = () => {
    return (
        <div className='w-full h-full text-center my-10'>
            <p className='text-sm text-primaryColor font-semibold'>About Us</p>
            <h1 className='text-3xl font-semibold py-2'>Unveiling Crypto Steps. Story</h1>
            <p className='text-sm w-7/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dolorem vel nobis magnam veritatis sint adipisci illum laboriosam odit modi possimus placeat voluptate architecto, esse, corrupti, earum odio sed.</p>

            <div className='w-full grid grid-cols-2 items-center my-8 gap-x-10'>
                <div className='w-full flex items-center justify-end'>
                    <img className='w-1/2 rounded-2xl ' src={journey} alt="" />
                </div>

                <div className='text-start'>
                    <h1 className='text-2xl font-semibold pb-5'>Founding and Early Years</h1>

                    <div className='space-y-4'>
                        <div className='w-full flex items-center gap-3'>
                            <h1 className='bg-primaryColor/10 px-3 py-1.5 text-primaryColor font-semibold'>2005</h1>
                            <p className='text-xs w-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quia illum iste temporibus dolor facere rerum voluptas natus illo magnam libero amet, tenetur iure reprehenderit esse exercitationem, dolorem sit. Consequatur.</p>
                        </div>
                        <div className='w-full flex items-center gap-3'>
                            <h1 className='bg-primaryColor/10 px-3 py-1.5 text-primaryColor font-semibold'>2005</h1>
                            <p className='text-xs w-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quia illum iste temporibus dolor facere rerum voluptas natus illo magnam libero amet, tenetur iure reprehenderit esse exercitationem, dolorem sit. Consequatur.</p>
                        </div>
                        <div className='w-full flex items-center gap-3'>
                            <h1 className='bg-primaryColor/10 px-3 py-1.5 text-primaryColor font-semibold'>2005</h1>
                            <p className='text-xs w-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quia illum iste temporibus dolor facere rerum voluptas natus illo magnam libero amet, tenetur iure reprehenderit esse exercitationem, dolorem sit. Consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;