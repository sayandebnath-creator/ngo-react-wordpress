import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import leftarrow from "../../images/left-arrow.svg";
import rightarrow from "../../images/right-arrow.svg";


const slides = [
    "../../images/banner-2-slide-1.jpg",
    "../../images/banner-2-slide-2.jpg",
    "../../images/banner-2-slide-3.jpg",
    "../../images/banner-2-slide-1.jpg",
    "../../images/banner-2-slide-2.jpg",
    "../../images/banner-2-slide-3.jpg"
];

const BannerSlider = () => {
  return (
    <section className="ul-banner ul-banner-2">
      <Swiper
        modules={[Navigation, Autoplay, Thumbs]}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="ul-banner-2-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="ul-banner-2-slide">
              <img
                src={slide}
                alt="Slide Background"
                className="ul-banner-2-slide-bg-img"
              />
              <div className="row gy-4 align-items-center">
                <div className="col-md-7">
                  <div className="ul-banner-txt">
                    <span className="ul-banner-sub-title ul-section-sub-title">
                      Change The World Together
                    </span>
                    <h1 className="ul-banner-title">
                      Empowering Hope Futures Lives Through Giving
                    </h1>
                    <p className="ul-banner-descr">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="ul-banner-btns">
                      <a href="donations.html" className="ul-btn">
                        <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="ul-banner-2-slider-navigation">
        <button className="prev">
          <img src={leftarrow} alt="arrow" />
        </button>
        <Swiper
          modules={[Thumbs]}
          slidesPerView={6}
          spaceBetween={10}
          className="ul-banner-2-thumb-slider"
        >
          {slides.map((thumb, index) => (
            <SwiperSlide key={index}>
              <img src={thumb} alt="Banner Thumb" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next">
          <img src={rightarrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default BannerSlider;
