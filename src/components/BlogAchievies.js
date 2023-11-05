import React, { Component } from "react";
import './style/BlogAchievies.css'
class BlogAchievies extends Component {
  render() {
    return (
      <section className="BlogAchievies p-5">
        <div className="contan" data-aos="fade-up">
          <h1>Empowering You to Achieve Your Goals and Live Your Best Life</h1>
          <p>
            Expert guidance and support for creating a fulfilling life on your
            terms
          </p>
        </div>
        <div className="items row">
          <div data-aos="fade-up" className="item col-6">
            <div className="img"></div>
            <div className="text">
              <h6>Development</h6>
              <p>
                Breaking Free From Limiting Beliefs: The Power Of Positive
                Mindset
              </p>
              <span>Continue Reading</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="item col-6">
            <div className="img two"></div>
            <div className="text">
              <h6>Development</h6>
              <p>Building Stronger Connections And Improving Communication</p>
              <span>Continue Reading</span>
            </div>
          </div>
          <div data-aos="fade-up" className="item col-6">
            <div className="img three"></div>
            <div className="text">
              <h6>Development, Health & Wellness</h6>
              <p>Mastering Self-Discovery: A Journey To Finding Your Purpose</p>
              <span>Continue Reading</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="item col-6">
            <div className="img four"></div>
            <div className="text">
              <h6>Coaching, Development</h6>
              <p>Strategies For Overcoming Adversity And Achieving Success</p>
              <span>Continue Reading</span>
            </div>
          </div>
          <div data-aos="fade-up" className="item col-6">
            <div className="img five"></div>
            <div className="text">
              <h6>Development, Health & Wellness</h6>
              <p>Mastering Self-Discovery: A Journey To Finding Your Purpose</p>
              <span>Continue Reading</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="item col-6">
            <div className="img six"></div>
            <div className="text">
              <h6>Coaching, Development</h6>
              <p>Strategies For Overcoming Adversity And Achieving Success</p>
              <span>Continue Reading</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogAchievies;
