import React from 'react';
import Banner from './Shared/Banner';
import Courses from './Shared/Courses';
import OurLearningProcess from './Shared/OurLearningProcess';
import OurTestimonials from './Shared/OurTestimonials';

const Home = () => {
    return (
        <>
            <Banner />
            <Courses />
            <OurLearningProcess />
            <OurTestimonials />
        </>
    );
};

export default Home;