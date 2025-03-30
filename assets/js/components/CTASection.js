import React from "react";
import { vectorimg } from "../../images/cta-vector.svg";

const CTASection = () => {
  return (
    <section className="ul-cta">
      <div className="ul-container">
        <span className="ul-section-sub-title">Start Donating Poor People</span>
        <h2 className="ul-cta-title">
          Children Need Your Help By Donating Today
        </h2>
        <a href="#" className="ul-btn">
          <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
          Get A Quote
        </a>
      </div>
      <img
        src={vectorimg}
        alt="Vector"
        className="ul-cta-vector"
      />
    </section>
  );
};

export default CTASection;
