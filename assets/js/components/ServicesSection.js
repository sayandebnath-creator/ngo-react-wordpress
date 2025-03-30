import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Fund Raised & Donation",
    description:
      "Professional Detailed Residential Cleaning, Ensuring Spotless Homes And Healthy Living Spaces.",
    imgSrc: "assets/images/service-1.jpg",
    link: "service-details.html",
  },
  {
    title: "Medical Treatment Help",
    description:
      "Professional Detailed Residential Cleaning, Ensuring Spotless Homes And Healthy Living Spaces.",
    imgSrc: "assets/images/service-2.jpg",
    link: "service-details.html",
  },
  {
    title: "Child Medical Research",
    description:
      "Professional Detailed Residential Cleaning, Ensuring Spotless Homes And Healthy Living Spaces.",
    imgSrc: "assets/images/service-3.jpg",
    link: "service-details.html",
  },
  {
    title: "Development Programs",
    description:
      "Professional Detailed Residential Cleaning, Ensuring Spotless Homes And Healthy Living Spaces.",
    imgSrc: "assets/images/service-4.jpg",
    link: "service-details.html",
  },
];

const ServicesSection = () => {
  return (
    <section className="ul-services ul-section-spacing overflow-hidden">
      <div className="ul-container">
        <div className="ul-section-heading">
          <div>
            <span className="ul-section-sub-title">
              Together, We Can Change Lives Forever.
            </span>
            <h2 className="ul-section-title">Our Non-Profit Services You Must Love</h2>
          </div>

          <div className="ul-services-slider-nav ul-slider-nav position-static">
            <button className="prev"><i className="flaticon-back"></i></button>
            <button className="next"><i className="flaticon-next"></i></button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="ul-service">
                <div className="ul-service-img">
                  <img src={service.imgSrc} alt="Service" />
                </div>
                <div className="ul-service-txt">
                  <h3 className="ul-service-title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p className="ul-service-descr">{service.description}</p>
                  <a href={service.link} className="ul-service-btn">
                    <i className="flaticon-up-right-arrow"></i> View Details
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;
