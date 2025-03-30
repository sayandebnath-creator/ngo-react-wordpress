import React, { useState } from "react";

const VolunteerSection = () => {
  const [selectedAmount, setSelectedAmount] = useState("10");
  const [customAmount, setCustomAmount] = useState("");
  return (
    <section className="ul-volunteer">
      <div className="row row-cols-md-2 row-cols-1 g-0">
        {/* Volunteer Block */}
        <div className="col">
          <div className="ul-volunteer-block">
            <h2 className="ul-volunteer-title">Become A Volunteer</h2>
            <p className="ul-volunteer-descr">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              The aspernaturaut odit aut fugit, sed quia consequuntur.
              Nonprofits around the world apply
            </p>
            <ul className="ul-volunteer-list">
              <li>Donate Money</li>
              <li>Handle With Care</li>
              <li>Donate Money</li>
            </ul>
            <a href="#" className="ul-btn">
              <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
              Become A Volunteer
            </a>
          </div>
        </div>

        {/* Donate Form */}
        <div className="col">
          <div className="ul-volunteer-block ul-donate-form-wrapper-2">
            <h2 className="ul-volunteer-title">Send a Gift For Children's</h2>
            <p className="ul-volunteer-descr">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              The aspernaturaut odit aut fugit, sed quia
            </p>
            <form className="ul-donate-form ul-donate-form-2">
              {[10, 20, 30, 40, 50].map((amount) => (
                <div key={amount}>
                  <input
                    type="radio"
                    name="donate-amount"
                    id={`donate-amount-${amount}`}
                    hidden
                    checked={selectedAmount === `${amount}`}
                    onChange={() => setSelectedAmount(`${amount}`)}
                  />
                  <label
                    htmlFor={`donate-amount-${amount}`}
                    className="ul-donate-form-label"
                  >
                    ${amount}
                  </label>
                </div>
              ))}

              <div className="custom-amount-wrapper">
                <input
                  type="radio"
                  name="donate-amount"
                  id="custom-amount"
                  checked={selectedAmount === "custom"}
                  onChange={() => setSelectedAmount("custom")}
                />
                <label htmlFor="custom-amount" className="ul-donate-form-label">
                  <input
                    type="number"
                    name="custom-amount"
                    id="donate-amount-custom"
                    placeholder="Custom Amount"
                    className="ul-donate-form-custom-input"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("custom");
                    }}
                  />
                </label>
              </div>

              <div>
                <button type="submit" className="ul-btn">
                  <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>{" "}
                  Donate Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
