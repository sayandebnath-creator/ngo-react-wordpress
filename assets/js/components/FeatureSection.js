import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-4 mb-lg-5">
          <div className="col-lg-5">
            <h2 className="text-primary">Why choose us?</h2>
          </div>
          <div className="col-lg-7">
            <p className="text-muted">
              Choose us because we provide exceptional service and innovative
              solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-lg-4 col-sm-6 mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mr-3">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="h6 mb-0">Feature {item}</h3>
              </div>
              <p className="text-muted">
                Description of Feature {item}. Providing quality and efficiency.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
