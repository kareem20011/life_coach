import React from "react";
import "./style/HomeCards.css";
const HomeCards = () => {
  return (
    <section className="cards p-5">
      <div className="row justify-content-between">
        <div  data-aos="fade-up" className="card  first m-2 col-lg-3">
          <h1>A Little Bit About Me</h1>
          <p>
            Certified life coach helping individuals achieve their goals and
            live fulfilling lives. Lets create the life you want.
          </p>
          <button>Book A Session</button>
        </div>
        <div  data-aos="fade-up" data-aos-delay="300" className="card  sec m-2 col-lg-3">
          <h1>New York Times Best Selling Author</h1>
          <p>Empowering and transformative</p>
        </div>
        <div  data-aos="fade-up" data-aos-delay="600" className="card  therd m-2 col-lg-3">
          <p>
            “My life coach has been a <mark>game-changer</mark>, helping me set and achieve
            goals and improve my overall well-being.” – Jane Smith
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
