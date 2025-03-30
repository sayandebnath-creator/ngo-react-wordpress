import React from "react";
import { Review1 } from "../../images/reviewer-1.png";
import { Review2 } from "../../images/reviewer-2.png";
import { Review3 } from "../../images/reviewer-3.png";
import { Review4 } from "../../images/reviewer-4.png";

const Testimonials = () => {
  return (
    <section className="ul-testimonial-2 ul-section-spacing">
      <div className="ul-container wow animate__fadeInUp">
        <div className="ul-section-heading">
          <div>
            <span className="ul-section-sub-title">
              Start donating poor people
            </span>
            <h2 className="ul-section-title">What People Say About us</h2>
          </div>
          <a href="#" className="ul-btn">
            <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
            All Testimonials
          </a>
        </div>

        <div className="row ul-testimonial-2-row gy-4">
          <div className="col-md-4">
            <div className="ul-testimonial-2-overview">
              <span className="rating">4.9</span>
              <div className="ul-testimonial-2-overview-stars">
                <i className="flaticon-star"></i>
                <i className="flaticon-star"></i>
                <i className="flaticon-star"></i>
                <i className="flaticon-star"></i>
                <i className="flaticon-star-1"></i>
              </div>
              <span className="ul-testimonial-2-overview-title">
                5 Star Rating
              </span>
              <p className="ul-testimonial-2-overview-descr">
                Sed ullamcorper tristique nisl at pharetra turpis accumsan et
                etiam eu sollicitudin eros. In imperdiet accumsan.
              </p>
              <div className="ul-testimonial-2-overview-reviewers">
                <img src={Review1} alt="Reviewer" />
                <img src={Review2} alt="Reviewer" />
                <img src={Review3} alt="Reviewer" />
                <img src={Review4} alt="Reviewer" />
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              className="ul-testimonial-2-slider"
            >
              <SwiperSlide>
                <div className="ul-review ul-review-2">
                  <span className="icon">
                    <i className="flaticon-quote-1"></i>
                  </span>
                  <p className="ul-review-descr">
                    Climb it see the world, not so the world can see you. This
                    is due to their excellent service...
                  </p>
                  <div className="ul-review-bottom">
                    <div className="ul-review-reviewer">
                      <div className="reviewer-image">
                        <img src={Review1} alt="reviewer" />
                      </div>
                      <div>
                        <h3 className="reviewer-name">Esther Howard</h3>
                        <span className="reviewer-role">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="ul-review ul-review-2">
                  <span className="icon">
                    <i className="flaticon-quote-1"></i>
                  </span>
                  <p className="ul-review-descr">
                    Climb it see the world, not so the world can see you. This
                    is due to their excellent service...
                  </p>
                  <div className="ul-review-bottom">
                    <div className="ul-review-reviewer">
                      <div className="reviewer-image">
                        <img src={Review4} alt="reviewer" />
                      </div>
                      <div>
                        <h3 className="reviewer-name">Daniyel Karlos</h3>
                        <span className="reviewer-role">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
