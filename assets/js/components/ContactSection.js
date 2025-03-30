import React, { useState } from "react";
import contactimg  from "@/images/contact-img.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="ul-contact">
      <div className="ul-container">
        <div className="row g-0">
          <div className="col-lg-5">
            <div className="ul-contact-img">
              <img src={contactimg} alt="Contact" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ul-contact-form-wrapper">
              <span className="ul-section-sub-title">Contact us</span>
              <h2 className="ul-section-title">Send Us Message For Donation</h2>
              <form onSubmit={handleSubmit} className="ul-contact-form">
                <div className="row row-cols-2 row-cols-xxs-1 ul-bs-row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="ul-btn" type="submit">
                      <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
