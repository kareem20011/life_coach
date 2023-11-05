import React from "react";
import Sponsor1 from "./imgs/logos/sponsor-1.svg";
import Sponsor2 from "./imgs/logos/sponsor-2.svg";
import Sponsor3 from "./imgs/logos/sponsor-3.svg";
import Sponsor4 from "./imgs/logos/sponsor-4.svg";

import "./style/Featured.css";
const Featured = () => {
  return (
    <section data-aos='fade-up' className="Featured p-5">
      <h5>Featured in</h5>
      <div className="Logos row justify-content-around align-items-center">
        <div className="col-lg-3 col-md-6 col-sm-12 m-auto ">
          <img src={Sponsor1} alt="Sponsor" className="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 m-auto ">
          <img src={Sponsor2} alt="Sponsor" className="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 m-auto ">
          <img src={Sponsor3} alt="Sponsor" className="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 m-auto ">
          <img src={Sponsor4} alt="Sponsor" className="" />
        </div>
      </div>
      
    </section>
  );
};

export default Featured;
