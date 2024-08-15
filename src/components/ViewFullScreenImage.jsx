import React from 'react';
import { IoMdClose } from 'react-icons/io';

const ViewFullScreenImage = ({ imagURL, onClose }) => {
    console.log(onClose)
    return (
        <div className='fixed bg-black/50 top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 '>

            <div className=' drop-shadow-3xl flex justify-center items-center h-[85vh] w-[85vh]  '>
                <button className='absolute text-primaryColor font-bold top-10 right-2 lg:right-1/4 text-3xl' onClick={onClose}>
                    <IoMdClose />
                </button>

                <div className='p-4 pt-10 relative w-full h-full'>
                    <img src={imagURL} alt="" className='w-full h-full object-scale-down' />
                </div>
            </div>

        </div>
    );
};

export default ViewFullScreenImage;