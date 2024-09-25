import React from 'react';

const MissionSection = () => {
    return (
        <section className="max-w-6xl mx-auto my-20 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="md:w-1/2">
                    <h5 className="text-primaryTextColor text-sm font-semibold uppercase mb-2">Our Mission</h5>
                    <h2 className="text-3xl font-bold mb-4">CryptoStep's Mission</h2>
                    <p className="text-gray-500 mb-8">
                        Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam.
                    </p>

                    <div className="space-y-6">
                        {/* Mission Point 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold">•</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Secure Crypto Solutions</h4>
                                <p className="text-gray-500">
                                    Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia.
                                </p>
                            </div>
                        </div>

                        {/* Mission Point 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold">•</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Empowering Crypto Education</h4>
                                <p className="text-gray-500">
                                    Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia.
                                </p>
                            </div>
                        </div>

                        {/* Mission Point 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                <span className="font-bold">•</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Advancing Decentralization</h4>
                                <p className="text-gray-500">
                                    Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
                    <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] bg-primaryColor/30 rounded-lg"></div>
                </div>
            </div>

            {/* Button */}
            <div className="text-center mt-10">
                <button className="bg-btnBgColor duration-300 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-btnHoverColor">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default MissionSection;
