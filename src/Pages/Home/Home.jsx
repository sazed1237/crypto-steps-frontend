import React from 'react';
import AddData from '../../components/AddData';
import EntryTheTrade from '../EntryTheTrade';
import ViewTrade from '../../components/ViewTrade';
import Hero from './Home/Hero';
import About from '../../components/About';
import Features from '../../components/Features';
import Insights from '../../components/Insights';
import Membership from '../../components/Membership';
import Testimonial from '../../components/Testimonial';

const Home = () => {
    return (
        <div className=' '>
            <Hero />
            <About />
            <Features />
            <Insights />
            <Membership />
            <Testimonial />
        </div>
    );
};

export default Home;