import React from 'react';

const ProductsSection = () => {
    const products = [
        { title: 'Crypto Wallet App', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '🔐' },
        { title: 'Crypto Trading Platform', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '📈' },
        { title: 'Crypto Payment Gateway', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '💳' },
        { title: 'Crypto Portfolio Tracker', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '📊' },
        { title: 'Education Platform', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '🎓' },
        { title: 'Crypto Mining Hardware', description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.', icon: '⚙️' },
    ];

    return (
        <section className="max-w-7xl mx-auto my-20 px-6 text-center">
            {/* Section Header */}
            <h5 className="text-primaryTextColor text-sm font-semibold uppercase mb-2">Our Products</h5>
            <h2 className="text-3xl font-bold mb-4">Explore Our Cutting-Edge Crypto Products</h2>
            <p className="text-gray-500 mb-10">
                Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
                Nibh est vitae suspendisse parturient sed lorem eu.
            </p>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-secondaryBgColor/10 rounded-lg shadow-md p-6 text-center">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            <p className='w-8 h-8'>{product.icon}</p>
                        </div>
                        {/* Product Title */}
                        <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                        {/* Product Description */}
                        <p className="text-gray-500">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
