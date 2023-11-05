import React from 'react';
import Customers from '../components/Customers';
import GetStartedToday from '../components/GetStartedToday';
import SatisfiedClients from '../components/SatisfiedClients';
import TistimonialsCard from '../components/TistimonialsCard';

const Testimonials = () => {
    return (
        <>
          <SatisfiedClients/>
          <TistimonialsCard/>
          <Customers/>
          <GetStartedToday/>
        </>
    );
}

export default Testimonials;
