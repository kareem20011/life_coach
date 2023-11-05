import React from "react";
import "./style/SatisfiedClients.css";

const SatisfiedClients = () => {
  return (
    <section id="Testimonials">
      <div className="row">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" className="text col-lg-6 col-sm-12">
            <h5>Testimonials</h5>
          <h1>Hear from Our Satisfied Clients</h1>
          <p>
          Transform your life and achieve your goals with professional and personalized support.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-delay='300' className="img col-lg-6 col-sm-12"></div>
      </div>
    </section>
  );
};

export default SatisfiedClients;
