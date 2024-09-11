import React, { useState } from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";

const Help = () => {
    const [showChat, setShowChat] = useState(false);
    console.log(showChat)

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 gap-5 md:gap-0 p-2 md:p-5">
            {/* Sidebar for Categories */}
            <div className="md:w-1/4 w-full bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Help Topics</h2>
                <ul className="space-y-2">
                    <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Payments and Transfers</li>
                    <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">My Account</li>
                    <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">My Wallet</li>
                    <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Login & Security</li>
                </ul>
            </div>

            {/* Main Content Area for Common Questions */}
            <div className="w-full md:w-3/4 md:ml-5">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Common Questions</h2>
                    <ul className="space-y-2 text-blue-600">
                        <li className="hover:underline cursor-pointer">I forgot my password. How do I reset it?</li>
                        <li className="hover:underline cursor-pointer">I want my money back. Can I cancel a payment?</li>
                        <li className="hover:underline cursor-pointer">Why is the payment I sent pending or unclaimed? Can I cancel it?</li>
                        <li className="hover:underline cursor-pointer">How do I change my password and security questions?</li>
                        <li className="hover:underline cursor-pointer">How do I get a refund?</li>
                        <li className="hover:underline cursor-pointer">Why is my payment on hold or unavailable?</li>
                        <li className="hover:underline cursor-pointer">How do I report potential fraud or unauthorized transactions?</li>
                    </ul>
                </div>
            </div>

            {/* Chat Box Button and Component */}
            <div className="fixed bottom-20 right-10 flex flex-col gap-3">
                {/* WhatsApp Chat Button */}
                <div
                    className="cursor-pointer"
                    onClick={() => window.open('https://wa.me/01786549126?text=Hello! ask anything! we love to here from you.', '_blank')}
                >
                    <span className="text-green-400 text-5xl "><FaWhatsappSquare /> </span>
                </div>

                {/* Messenger Chat Button */}
                <div
                    className="cursor-pointer"
                    onClick={() => window.open('https://m.me/sazed9126', '_blank')}
                >
                    <span className="text-blue-500 text-5xl"><SiMessenger /> </span>
                </div>
            </div>

            {/* {showChat && <ChatBox onClose={() => setShowChat(false)} />}  */}
        </div>
    );
};

export default Help;
