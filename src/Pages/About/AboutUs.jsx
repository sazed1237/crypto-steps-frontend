import React from 'react';
import About from '../../components/About';
import PageHero from '../../components/PageHero';
import CEO from '../../components/CEO';
import MissionSection from './MissionSection';
import TeamSection from './TeamSection';

const AboutUs = () => {
    return (
        <div>
            <PageHero
                title={"About Us"}
                subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum ratione dignissimos velit? Animi autem sint repudiandae veniam quo placeat!"}
            />

            <About />
            <CEO />
            <MissionSection />
            <TeamSection />

        </div>
    );
};

export default AboutUs;