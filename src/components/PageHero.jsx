import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({title, subTitle}) => {
    return (
        <div className='w-full h-72  bg-gradient-to-b from-headerBgColor from-0% via-primaryColor via-80% to-white to-100% text-center '>
            <div className='space-y-2 w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-5xl w-8/12 mx-auto font-bold text-white'>{title}</h1>
                <p className='text-xs pt-2 text-white/50 w-6/12 mx-auto'>{subTitle}</p>
            </div>
        </div>
    );
};

export default PageHero;