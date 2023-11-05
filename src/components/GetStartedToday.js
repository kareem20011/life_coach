import React from "react";
import info from "./imgs/info-2-400x448.jpg";
import infobg from "./imgs/info-bg-2-400x449.jpg";
import "./style/GetStartedToday.css";

const GetStartedToday = () => {
  return (
    <div className="GetStarted p-3">
      <div className="row justify-content-around align-items-center">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300"  className="text col-lg-6 col-sm-12 pt-5">
          <div className="cont">
            <h1>Unlock Your True Potential With Life Coaching Services</h1>
            <p>
              Transform your life and achieve your goals with professional and
              personalized support.
            </p>
            <button>Get Started Today</button>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-delay='300' className="imgs col-lg-6 col-sm-12">
          <img className="info bg" src={infobg} alt="info" />
          <img className="info main" src={info} alt="info" />
        </div>
      </div>
    </div>
  );
};

export default GetStartedToday;
