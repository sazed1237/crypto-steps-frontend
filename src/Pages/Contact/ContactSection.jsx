import React from 'react';
import { IoCall, IoTime } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-16">

                {/* Contact Form Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-500 mb-8">
                        Facilisi commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primaryColor focus:bg-primaryColor/5 focus:border-transparent"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primaryColor focus:bg-primaryColor/5 focus:border-transparent"
                                placeholder="Email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primaryColor focus:bg-primaryColor/5 focus:border-transparent"
                                placeholder="Writing your message here..."
                                rows="4"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-btnBgColor text-white rounded-full font-medium hover:bg-btnHoverColor transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                    {/* Google Map Embed */}
                    <div className="h-64 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116423.16246350955!2d90.34928563016845!3d23.780777771972012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894d1a9c4bd%3A0x9e1236d7b3b4d9db!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695663775223!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dhaka Location"
                        ></iframe>
                    </div>

                    <div className="space-y-4">
                        {/* Phone Number */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#36236a] text-white p-3 rounded-full">
                                <IoCall />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Phone Number</p>
                                <p className="text-gray-500">+123 456 789 101</p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#36236a] text-white p-3 rounded-full">
                                <IoTime />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Business Hours</p>
                                <p className="text-gray-500">Monday - Friday / 8AM to 5PM</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-lg font-semibold mb-2">Follow Us:</p>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-[#36236a] text-white p-2 rounded-full hover:bg-primaryColor duration-300">
                                    <FaFacebookF size={18} />
                                </a>
                                <a href="#" className="bg-[#36236a] text-white p-2 rounded-full hover:bg-primaryColor duration-300">
                                    <FaTwitter size={18} />
                                </a>
                                <a href="#" className="bg-[#36236a] text-white p-2 rounded-full hover:bg-primaryColor duration-300">
                                    <FaLinkedinIn size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
