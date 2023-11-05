import React from "react";
import "./style/FirstSection.css";

const FirstSection = () => {
  return (
    <section id="Home">
      <div className="row">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" className="text col-lg-6 col-sm-12">
          <h1>Unlock Your True Potential With Life Coaching Services</h1>
          <p>
            Transform your life and achieve your goals with professional and
            personalized support.
          </p>
          <button type="button" class="btn btn-secondary p-3">
            Learn About Me
          </button>
        </div>
        <div data-aos='fade-left' data-aos-delay='300' data-aos-easing="ease-in-sine" data-aos-offset="300" className="img col-lg-6 col-sm-12"></div>
      </div>
    </section>
  );
};

export default FirstSection;
