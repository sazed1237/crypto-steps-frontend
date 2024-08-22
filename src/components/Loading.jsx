import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen min-w-full bg-primaryBgColor z-50 top-0 right-0 left-0 bottom-0 flex items-center justify-center '>
            <span className="loading loading-bars loading-xs text-primaryColor"></span>
            <span className="loading loading-bars loading-sm text-primaryColor"></span>
            <span className="loading loading-bars loading-md text-primaryColor"></span>
            <span className="loading loading-bars loading-lg text-primaryColor"></span>
        </div>
    );
};

export default Loading;