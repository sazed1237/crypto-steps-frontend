import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

const WhyChooseUs = () => {
    return (
        <section className="max-w-6xl mx-auto my-20 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="md:w-1/2">
                    <h5 className="text-primaryTextColor text-sm font-semibold uppercase mb-2">Why Choose Us</h5>
                    <h2 className="text-3xl font-bold mb-4 w-3/4">Unlock Exclusive Membership Benefits</h2>
                    <p className="text-gray-500 mb-8">
                        Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam.
                    </p>

                    <div className="space-y-6">
                        {/* Why choose us Point 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold"><FaAngleRight /></span>
                            </div>
                            <h4 className="text-lg font-semibold">Access to Exclusive Content</h4>

                        </div>

                        {/* Why choose us Point 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold"><FaAngleRight /></span>
                            </div>
                            <h4 className="text-lg font-semibold">Networking Opportunities</h4>

                        </div>

                        {/* Why choose us Point 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold"><FaAngleRight /></span>
                            </div>
                            <h4 className="text-lg font-semibold">Discount and Special Offers</h4>

                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
                    <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] bg-primaryColor/30 rounded-lg"></div>
                </div>
            </div>

        </section>
    );
};

export default WhyChooseUs;