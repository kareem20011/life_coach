import React from "react";
import Logo from "./imgs/logo.svg";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="head row justify-content-between align-items-center">
        <img className="col-lg-3 col-sm-12" src={Logo} alt="logo"></img>
        <p className="col-lg-7 col-sm-12">
          There is always room for health & vitality in your life
        </p>
        <button className="col-lg-2 col-sm-12">Book Appointment</button>
      </div>
      <div className="cont row align-items-center">
        <div className="title col-sm-12 col-lg-2">The Journal</div>
        <div className="scrollLinks col-sm-12 col-lg-10">
          <div className="bar">
            <a href="/">
              Breaking free from limiting beliefs: The power of positive mindset
            </a>
            <a href="/">
              Building Stronger Connections and Improving Communication
            </a>
            <a href="/">
              Mastering Self-Discovery: A Journey to Finding Your Purpose
            </a>
            <a href="/">
              Strategies for Overcoming Adversity and Achieving Success
            </a>
            <a href="/">
              Tools and Techniques for Living in the Present Moment
            </a>
            <a href="/">How to Overcome Challenges and Embrace Change</a>
            <a href="/">A Guide to Finding Happiness and Fulfillment</a>
          </div>
        </div>
      </div>
      <div className="links row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h5 className="mb-3">Pages</h5>
          <a href="/">Product</a>
          <a href="/">Solutions</a>
          <a href="/">Company</a>
          <a href="/">Resources</a>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h5 className="mb-3">Information</h5>
          <a href="/">About Me</a>
          <a href="/">Contact Me</a>
          <a href="/">Careers</a>
          <a href="/">Offices</a>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h5 className="mb-3">Legal</h5>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Press</a>
        </div>
        <div className="col-sm-12 col-lg-3">
          <h5 className="mb-3">Get In Touch</h5>
          <a href="/">
            <i class="fa-solid fa-mobile-screen-button"></i> (555) 802-1234
          </a>
          <a href="/">
            <i class="fa-regular fa-envelope"></i> your@email.com
          </a>
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <p>© Copyright 2012 - 2023 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
    </footer>
  );
};

export default Footer;
