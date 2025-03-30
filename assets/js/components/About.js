import React from "react";
import aboutImg from "@/assets/images/about-2-img.jpg";
import missionIcon from "../../images/mission.svg";
import visionIcon from "../../images/vision.svg";

const About = () => {
  return (
    <section className="ul-about ul-about-2 ul-section-spacing wow animate__fadeInUp">
      <div className="ul-container">
        <div className="row row-cols-md-2 row-cols-1 align-items-center gy-4 ul-about-row">
          {/* Image Section */}
          <div className="col">
            <div className="ul-about-imgs ul-about-2-img">
              <div className="img-wrapper">
                <img src={aboutImg} alt="Image" />
              </div>
              <div className="ul-about-2-stat">
                <span className="number">15+</span>
                <span className="txt">Years Of Experience</span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col">
            <div className="ul-about-txt">
              <span className="ul-section-sub-title ul-section-sub-title--2">
                About US
              </span>
              <h2 className="ul-section-title">
                We Believe This Life's About Give For Poor People.
              </h2>
              <p className="ul-section-descr">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit The aspernaturaut odit aut fugit, sed quia consequuntur.
                Nonprofits around the world apply and join us to access more
                funding.
              </p>

              <div className="ul-about-bottom ul-about-2-bottom">
                <div className="ul-about-2-bottom-block">
                  <div className="ul-about-2-bottom-block-icon">
                    <img src={missionIcon} alt="icon" />
                  </div>
                  <div className="ul-about-2-bottom-block-txt">
                    <h3 className="ul-about-2-bottom-block-title">
                      Our Mission
                    </h3>
                    <p className="ul-about-2-bottom-block-descr">
                      The World Apply And Join us to Access Funding.
                    </p>
                  </div>
                </div>

                <div className="ul-about-2-bottom-block">
                  <div className="ul-about-2-bottom-block-icon">
                    <img src={visionIcon} alt="icon" />
                  </div>
                  <div className="ul-about-2-bottom-block-txt">
                    <h3 className="ul-about-2-bottom-block-title">
                      Our Vision
                    </h3>
                    <p className="ul-about-2-bottom-block-descr">
                      The World Apply And Join us to Access Funding.
                    </p>
                  </div>
                </div>
              </div>

              <a href="about.html" className="ul-btn">
                <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
