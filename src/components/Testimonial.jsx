import React, { useEffect, useState } from 'react';
import UseAxiosPublic from '../hooks/UseAxiosPublic';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Testimonial = () => {

    const [testimonials, setTestimonials] = useState()
    const axiosPublic = UseAxiosPublic()

    useEffect(() => {
        const fetchTestimonial = async () => {
            const response = await axiosPublic.get("/api/testimonial")
            setTestimonials(response?.data)
        }

        fetchTestimonial()
    }, [])

    console.log(testimonials)

    return (
        <div className='text-center py-10 bg-primaryColor/5 px-10'>
            <div>
                <p className='text-sm text-primaryTextColor font-semibold'>Crypto Steps</p>
                <h4 className='text-3xl font-bold'>Testimonial</h4>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    testimonials?.map(testimonial => {
                        return (
                            <SwiperSlide>
                                <div className='pt-10' key={testimonial?._id}>

                                    <p>{testimonial?.testimonial}</p>

                                    <div className='flex flex-col justify-center items-center pt-10'>
                                        <img className='w-28 rounded-md' src={testimonial?.image} alt="" />
                                        <h3 className='text-lg font-semibold'>{testimonial?.name}</h3>
                                        <p className=''>{testimonial?.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;