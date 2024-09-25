import React from 'react';

const ProcessSection = () => {
    const processSteps = [
        { step: '01', title: 'Sign Up for Membership', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.' },
        { step: '02', title: 'Access Exclusive Content', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.' },
        { step: '03', title: 'Engage and Participate', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.' },
        { step: '04', title: 'Enjoy Member Benefits', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.' },
    ];

    return (
        <section className="bg-white/80 text-black py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section Header */}
                <h5 className="text-primaryTextColor text-sm font-semibold uppercase mb-2">How It Works</h5>
                <h2 className="text-3xl font-bold mb-4">Understanding Nextronium's Process</h2>
                <p className="text-gray-400 mb-10">
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. 
                    Nibh est vitae suspendisse parturient sed lorem eu.
                </p>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Step Circle */}
                            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4 text-white text-lg font-semibold">
                                {step.step}
                            </div>
                            {/* Step Title */}
                            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                            {/* Step Description */}
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
