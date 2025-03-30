import React from "react";

const projects = [
  { id: 1, image: "assets/images/project-1.jpg", title: "Child trouble & care", description: "Domestic & Transportation", size: "lg" },
  { id: 2, image: "assets/images/project-2.jpg", title: "Child trouble & care", description: "Domestic & Transportation", size: "sm" },
  { id: 3, image: "assets/images/project-3.jpg", title: "Child trouble & care", description: "Domestic & Transportation", size: "sm" },
  { id: 4, image: "assets/images/project-4.jpg", title: "Child trouble & care", description: "Domestic & Transportation", size: "lg" },
];

const ProjectSection = () => {
  return (
    <section className="ul-projects ul-section-spacing">
      <div className="ul-container">
        <div className="ul-section-heading text-center justify-content-center">
          <div>
            <span className="ul-section-sub-title">Our Complete Projects</span>
            <h2 className="ul-section-title">Our Non-Profit complete projects You Must Love</h2>
          </div>
        </div>

        <div className="row ul-bs-row justify-content-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`col-${project.size === "lg" ? "lg-8" : "lg-4"} col-md-6 col-10 col-xxs-12`}
            >
              <div className={`ul-project ${project.size === "sm" ? "ul-project--sm" : ""}`}>
                <div className="ul-project-img">
                  <img src={project.image} alt="Project Image" />
                </div>
                <div className="ul-project-txt">
                  <div>
                    <h3 className="ul-project-title">
                      <a href="project-details.html">{project.title}</a>
                    </h3>
                    <p className="ul-project-descr">{project.description}</p>
                  </div>
                  <a href="project-details.html" className="ul-project-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
