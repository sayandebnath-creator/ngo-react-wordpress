import React from "react";
import { logo } from "../../images/logo.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`ul-sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header */}
      <div className="ul-sidebar-header">
        <div className="ul-sidebar-header-logo">
          <a href="index.html">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        {/* Sidebar Close Button */}
        <button className="ul-sidebar-closer" onClick={toggleSidebar}>
          <i className="flaticon-close"></i>
        </button>
      </div>

      {/* Navigation Wrapper (for menu items if needed) */}
      <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

      {/* Sidebar Footer */}
      <div className="ul-sidebar-footer">
        <span className="ul-sidebar-footer-title">Follow us</span>
        <div className="ul-sidebar-footer-social">
          <a href="#"><i className="flaticon-facebook"></i></a>
          <a href="#"><i className="flaticon-twitter"></i></a>
          <a href="#"><i className="flaticon-instagram"></i></a>
          <a href="#"><i className="flaticon-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
