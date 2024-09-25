import React from 'react';
import PageHero from '../../components/PageHero';
import Membership from '../../components/Membership';
import WhyChooseUs from './WhyChooseUs';
import ProcessSection from './ProcessSection';
import Testimonial from '../../components/Testimonial';

const MembershipPage = () => {
    return (
        <div>
            <PageHero
                title={"Membership"}
                subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor iure minus consequatur eius quod, tempore quibusdam doloribus adipisci odio."}
            />
            <WhyChooseUs />
            <Membership />
            <ProcessSection />
            <Testimonial />

        </div>

    );
};

export default MembershipPage;