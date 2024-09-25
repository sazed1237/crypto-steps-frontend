import React from 'react';
import PageHero from '../../components/PageHero';
import ContactSection from './ContactSection';
import FAQSection from '../../components/FAQSection';

const Contact = () => {
    return (
        <div>
            <PageHero
                title={"Contact Us"}
                subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, illum libero quia consectetur alias error?"}
            />
            <ContactSection />
            <FAQSection />
        </div>
    );
};

export default Contact;