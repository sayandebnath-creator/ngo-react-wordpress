import React from "react";
import Sidebar from "../components/Sidebar";
import SearchForm from "../components/SearchForm";
import { logo } from "../../images/logo.svg";

const Header = () => {
  return (
    <>
      <SearchForm />
      <Sidebar />
      <header className="ul-header ul-header-2">
        <div className="ul-header-top">
          <div className="ul-header-top-wrapper ul-header-container">
            <div className="ul-header-top-left">
              <span className="address">
                <i className="flaticon-pin"></i> Rd. Santa Ana, Illinois 85486,
                United States
              </span>
            </div>
            <div className="ul-header-top-right">
              <div className="ul-header-top-social">
                <span className="title">Follow us: </span>
                <div className="links">
                  <a href="#">
                    <i className="flaticon-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ul-header-bottom to-be-sticky">
          <div className="ul-header-bottom-wrapper ul-header-container">
            <div className="logo-container">
              <a href="index.html" className="d-inline-block">
                <img src={logo} alt="logo" className="logo" />
              </a>
            </div>

            {/* Header Navigation */}
            <div className="ul-header-nav-wrapper">
              <div className="to-go-to-sidebar-in-mobile">
                <nav className="ul-header-nav">
                  <div className="has-sub-menu">
                    <a href="#">Home</a>
                    <div className="ul-header-submenu">
                      <ul>
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="about.html">About</a>

                  <div className="has-sub-menu">
                    <a href="#">Pages</a>
                    <div className="ul-header-submenu">
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                        <li>
                          <a href="projects.html">Projects</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Member Details</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="has-sub-menu">
                    <a href="#">Donation</a>
                    <div className="ul-header-submenu">
                      <ul>
                        <li>
                          <a href="donations.html">Donation Listing</a>
                        </li>
                        <li>
                          <a href="donation-details.html">Donation Details</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="has-sub-menu">
                    <a href="#">Event</a>
                    <div className="ul-header-submenu">
                      <ul>
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="event-details.html">Event Details</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="has-sub-menu">
                    <a href="#">Blog</a>
                    <div className="ul-header-submenu">
                      <ul>
                        <li>
                          <a href="blog.html">Blogs</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blogs Layout 2</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="contact.html">Contact</a>
                </nav>
              </div>
            </div>

            {/* Actions */}
            <div className="ul-header-actions">
              <button className="ul-header-search-opener">
                <i className="flaticon-search"></i>
              </button>
              <a href="contact.html" className="ul-btn d-sm-inline-flex d-none">
                <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
                Join With us
              </a>
              <button className="ul-header-sidebar-opener d-lg-none d-inline-flex">
                <i className="flaticon-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
