import React from 'react';

const TeamSection = () => {
    const teamMembers = [
        { name: 'Ipan Benjamin', role: 'Founder', image: '' },
        { name: 'Garrett Yasin', role: 'Co-Founder', image: '' },
        { name: 'Alyssa Kipop', role: 'Chief Technology Officer', image: '' },  
        { name: 'Henry Barter', role: 'Head of Operations', image: '' },
    ];

    return (

        <section className='bg-black w-full py-10 my-10 '>
            <div className="max-w-6xl mx-auto px-6 text-center ">
                {/* Section Header */}
                <h5 className="text-primaryTextColor text-sm font-semibold uppercase mb-2">Our Team</h5>
                <h2 className="text-3xl text-white font-bold mb-4">Introducing the CryptoSteps Team</h2>
                <p className="text-gray-500 mb-10">
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
                    Nibh est vitae suspendisse porttitor sed lorem eu.
                </p>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Image Placeholder */}
                            <div className="w-[200px] h-[300px] bg-purple-300 rounded-lg mb-4"></div>
                            {/* Name and Role */}
                            <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
