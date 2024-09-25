import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Membership = () => { 
    return ( 
        <div className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto text-center space-y-4">
                {/* Section Title */}
                <p className="text-sm text-purple-400">Membership</p>
                <h2 className="text-3xl font-semibold">Your Gateway to Premium Crypto Services</h2>
                <p className="text-sm text-gray-400 w-2/3 mx-auto">
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient
                    sed lorem eu.
                </p>
            </div>

            {/* Membership Cards */}
            <div className="flex justify-center gap-10 py-12">
                {/* Basic Membership */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-80 space-y-6">
                    <p className="text-purple-400 text-sm">Entry Level</p>
                    <h3 className="text-xl font-semibold">Basic Membership</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' />  Access to beginner crypto courses</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Monthly trend insights report</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Limited resources library access</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Community support channels</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Discount on paid events</li>
                    </ul>
                    <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white duration-300 w-full">
                        Join Basic Membership
                    </button>
                </div>

                {/* Pro Membership */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-80 space-y-6">
                    <p className="text-purple-400 text-sm">Intermediate Level</p>
                    <h3 className="text-xl font-semibold">Pro Membership</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Full access to advanced crypto courses</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Weekly market analysis updates</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Early access to premium features</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Priority support from team</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Exclusive webinars and events</li>
                    </ul>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-purple-800 duration-300 w-full">
                        Upgrade Pro Membership
                    </button>
                </div>

                {/* VIP Membership */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-80 space-y-6">
                    <p className="text-purple-400 text-sm">Premium Level</p>
                    <h3 className="text-xl font-semibold">VIP Membership</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Personalized one-on-one consultations</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Daily crypto news & insights</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Customizable portfolio management</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Access to private research reports</li>
                        <li className='flex items-center gap-x-2' ><GoDotFill className='text-purple-400' /> Dedicated priority assistance</li>
                    </ul>
                    <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white duration-300 w-full">
                        Become a VIP Member
                    </button>
                </div>
            </div>
        </div>
    ); 
}; 

export default Membership; 
