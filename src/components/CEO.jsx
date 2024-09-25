import React from 'react';

const CEO = () => {
    return (
        <div className='max-w-5xl h-[300px] mx-auto flex flex-col items-center justify-center  rounded-badge bg-gradient-to-r from-primaryColor to-[#985cff] my-16'>
            <div className='w-full flex flex-col items-center justify-center  space-y-5'>
                <p className='text-sm text-white/75 w-10/12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta natus nisi libero laborum quae! Magnam illum vel, sequi molestias iusto consequatur sapiente fugit? Voluptas qui odio repudiandae! Dolores quam rerum molestias quis recusandae quae laudantium facilis deserunt possimus odit error a suscipit doloremque, eius dolorem obcaecati ratione vero nihil.
                </p>
                <div className='flex items-center gap-x-3'>
                    <img className='rounded-full w-16' src="https://via.placeholder.com/150" alt='Crypto CEO' />
                    <div className='flex-col'>
                        <h2 className='text-lg text-white font-semibold'>Tamiz Uddin</h2>
                        <p className='text-xs text-white/50'>CEO Of Crypto Steps</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CEO;