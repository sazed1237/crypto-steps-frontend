import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQSection = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
                <h2 className="text-lg text-primaryTextColor font-semibold mb-2">Questions & Answers</h2>
                <h1 className="text-3xl font-bold mb-4">Frequently Ask Questions</h1>
                <p className="text-gray-500">
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
                    Nibh est vitae suspendisse parturient sed lorem eu.
                </p>
            </div>

            <div className="space-y-4">
                {/* Question 1 */}
                <div className="border rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggle(1)}
                        className={`flex justify-between items-center w-full text-left px-6 py-3 font-medium ${open === 1 ? 'bg-btnBgColor text-white' : 'bg-gray-100 text-black'}`}
                    >
                        What is cryptocurrency?
                        {open === 1 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {open === 1 && (
                        <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-700">
                                Ultricies justo arcu sit donec nibh dictumst nulla ac. Dolor purus mauris quam tellus iaculis
                                cursus ipsum elit sed. At enim duis sit fringilla. Lacus justo velit viverra iaculis
                                pellentesque leo massa. Netus in in eu et rutrum venenatis. Nunc egestas nisl felis morbi.
                            </p>
                        </div>
                    )}
                </div>

                {/* Question 2 */}
                <div className="border rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggle(2)}
                        className={`flex justify-between items-center w-full text-left px-6 py-3 font-medium ${open === 2 ? 'bg-btnBgColor text-white' : 'bg-gray-100 text-black'}`}
                    >
                        How do I buy cryptocurrency?
                        {open === 2 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {open === 2 && (
                        <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-700">
                                To buy cryptocurrency, you can use a trusted exchange platform, create an account, deposit
                                funds, and then purchase the cryptocurrency of your choice.
                            </p>
                        </div>
                    )}
                </div>

                {/* Question 3 */}
                <div className="border rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggle(3)}
                        className={`flex justify-between items-center w-full text-left px-6 py-3 font-medium ${open === 3 ? 'bg-btnBgColor text-white' : 'bg-gray-100 text-black'}`}
                    >
                        What is blockchain?
                        {open === 3 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {open === 3 && (
                        <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-700">
                                Blockchain is a decentralized technology that enables secure transactions across a network
                                of computers without the need for intermediaries.
                            </p>
                        </div>
                    )}
                </div>

                {/* Question 4 */}
                <div className="border rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggle(4)}
                        className={`flex justify-between items-center w-full text-left px-6 py-3 font-medium ${open === 4 ? 'bg-btnBgColor text-white' : 'bg-gray-100 text-black'}`}
                    >
                        Is cryptocurrency safe to use?
                        {open === 4 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {open === 4 && (
                        <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-700">
                                Cryptocurrency can be safe if you take proper precautions, like using secure wallets and
                                strong passwords, and ensuring you are aware of potential risks.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Support Section */}
            <div className="mt-16 text-center">
                <h3 className="text-lg font-semibold mb-2">
                    DIDN'T FIND THE ANSWER YOU ARE LOOKING FOR?
                </h3>
                <p className="text-gray-500 mb-6">
                    Eget nam congue neque nunc vel viverra lorem massa urna. Magna proin pellentesque cras amet et. Sit in mattis quam nec tellus.
                </p>
                <button className="px-5 py-2 bg-btnBgColor text-white rounded-full font-medium hover:bg-btnHoverColor transition duration-300">
                    Contact Our Support
                </button>
            </div>
        </section>
    );
};

export default FAQSection;
