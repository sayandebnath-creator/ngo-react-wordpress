import React from "react";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";

const blogImages = [blog1, blog2];

const Footer = () => {
  return (
    <footer className="ul-footer">
      <div className="ul-footer-top">
        <div className="ul-footer-container">
          <div className="ul-footer-top-contact-infos">
            {/* Address */}
            <div className="ul-footer-top-contact-info">
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-pin"></i>
                </div>
              </div>
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label">
                  Address
                </span>
                <h5 className="ul-footer-top-contact-info-address">
                  4648 Rocky Road Philadelphia PA, 1920
                </h5>
              </div>
            </div>
            {/* Email */}
            <div className="ul-footer-top-contact-info">
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-email"></i>
                </div>
              </div>
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label">
                  Send Email
                </span>
                <h5 className="ul-footer-top-contact-info-address">
                  <a href="mailto:info@example.com">info@example.com</a>
                </h5>
              </div>
            </div>
            {/* Phone */}
            <div className="ul-footer-top-contact-info">
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-telephone-call-1"></i>
                </div>
              </div>
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label">
                  Call Emergency
                </span>
                <h5 className="ul-footer-top-contact-info-address">
                  <a href="tel:88012365499">+88 0123 654 99</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ul-footer-middle">
        <div className="ul-footer-container">
          <div className="ul-footer-middle-wrapper">
            {/* About */}
            <div className="ul-footer-about">
              <a href="index.html">
                <img
                  src="assets/images/logo-white.svg"
                  alt="logo"
                  className="logo"
                />
              </a>
              <p className="ul-footer-about-txt">
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
                a lacinia curabitur lacinia mollis
              </p>
            </div>

            {/* Quick Links */}
            <div className="ul-footer-widget">
              <h3 className="ul-footer-widget-title">Quick Links</h3>
              <div className="ul-footer-widget-links">
                <a href="about.html">About Us</a>
                <a href="services.html">Our Services</a>
                <a href="blog.html">Our Blogs</a>
                <a href="faq.html">FAQ’S</a>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="ul-footer-widget ul-footer-recent-posts">
              <h3 className="ul-footer-widget-title">Recent Posts</h3>
              <div className="ul-blog-sidebar-posts">
                {[1, 2].map((post, index) => (
                  <div
                    key={index}
                    className="ul-blog-sidebar-post ul-footer-post"
                  >
                    <div className="img">
                      <img src={blogImages[index]} alt="Post Image" />
                    </div>
                    <div className="txt">
                      <span className="date">
                        <span className="icon">
                          <i className="flaticon-calendar"></i>
                        </span>
                        <span>May 12, 2025</span>
                      </span>
                      <h4 className="title">
                        <a href="blog-details.html">
                          There are many variations of passages
                        </a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="ul-footer-widget ul-nwsltr-widget">
              <h3 className="ul-footer-widget-title">Contact Us</h3>
              <div className="ul-footer-widget-links ul-footer-contact-links">
                <a href="mailto:info@example.com">
                  <i className="flaticon-mail"></i> info@example.com
                </a>
                <a href="tel:123-456-7890">
                  <i className="flaticon-telephone-call"></i> 123-456-7890
                </a>
              </div>
              <form action="#" className="ul-nwsltr-form">
                <div className="top">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="ul-nwsltr-input"
                  />
                  <button type="submit">
                    <i className="flaticon-next"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="ul-footer-bottom">
        <div className="ul-footer-container">
          <div className="ul-footer-bottom-wrapper">
            <p className="copyright-txt">
              &copy; 2025 Charitics. All rights reserved
            </p>
            <div className="ul-footer-bottom-nav">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
