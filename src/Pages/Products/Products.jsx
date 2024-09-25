import React from 'react';
import PageHero from '../../components/PageHero';
import ProductsSection from './ProductsSection';
import Features from '../../components/Features';
import Testimonial from '../../components/Testimonial';
import Membership from '../../components/Membership';
import Insights from '../../components/Insights';

const Products = () => {
    return (
        <div>
            <PageHero
                title={"Products"}
                subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur quo expedita culpa illum, maiores soluta molestias. Eveniet, obcaecati nesciunt!"}
            />
            <ProductsSection />
            <Features />
            <Testimonial />
            <Membership />
            <Insights />
        </div>

    );
};

export default Products;