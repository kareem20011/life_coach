import React from "react";
import "./style/Goals.css";
const Goals = () => {
  return (
    <div className="Goals">
      <div className="text-center w-75 m-auto">
        <h1>
          I can help you unlock your full potential and achieve your goals.
        </h1>
        <p>
          As a life coach, my goal is to help you identify your strengths,
          clarify your goals, and develop a plan to achieve them with guidance
          and support.
        </p>
      </div>
      <div className="images row justify-content-between">
        <div data-aos="fade-up" className="left col-lg-6 col-sm-12 col-12">
          <div className="lable">
            <div className="cont">
              <h3>Personal Coaching</h3>
              <p>Pellentesque in ipsum id orci porta dapibus.</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="respons">
          <div className="cont">
            <h3>Personal Coaching</h3>
            <p>Pellentesque in ipsum id orci porta dapibus.</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay='300' className="right col-lg-6 col-sm-12 col-12">
          <div className="lable">
            <div className="cont">
              <h3>Career Coaching</h3>
              <p>
                Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin
                molestie malesuada.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay='300' className="respons">
          <div className="cont">
            <h3>Career Coaching</h3>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin
              molestie malesuada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
