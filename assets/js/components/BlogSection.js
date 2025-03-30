import React from "react";

const blogs = [
  {
    id: 1,
    imgSrc: "../../images/blog-1.jpg",
    date: "15",
    month: "Dec",
    author: "By Admin",
    category: "Donation",
    title: "Give Education, It’s The Best Gift Ever.",
    link: "blog-details.html",
  },
  {
    id: 2,
    imgSrc: "../../images/blog-2.jpg",
    date: "15",
    month: "Dec",
    author: "By Admin",
    category: "Donation",
    title: "Don’t treat oceans as universal garbage cans",
    link: "blog-details.html",
  },
  {
    id: 3,
    imgSrc: "../../images/blog-3.jpg",
    date: "15",
    month: "Dec",
    author: "By Admin",
    category: "Donation",
    title: "The sun and the sand makes beaches beautiful",
    link: "blog-details.html",
  },
];

const BlogSection = () => {
  return (
    <section className="ul-blogs-2 ul-section-spacing">
      <div className="ul-container">
        <div className="ul-section-heading">
          <div className="left">
            <span className="ul-section-sub-title"> Latest Blog </span>
            <h2 className="ul-section-title">Read Our Latest News</h2>
          </div>
          <a href="blog.html" className="ul-btn">
            <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> All Blogs
          </a>
        </div>

        <div className="row ul-bs-row justify-content-center">
          {blogs.map((blog) => (
            <div className="col" key={blog.id}>
              <div className="ul-blog ul-blog-2">
                <div className="ul-blog-img">
                  <img src={blog.imgSrc} alt="Blog" />
                  <div className="date">
                    <span className="number">{blog.date}</span>
                    <span className="txt">{blog.month}</span>
                  </div>
                </div>
                <div className="ul-blog-txt">
                  <div className="ul-blog-infos">
                    <div className="ul-blog-info">
                      <span className="icon">
                        <i className="flaticon-account"></i>
                      </span>
                      <span className="text">{blog.author}</span>
                    </div>
                    <div className="ul-blog-info">
                      <span className="icon">
                        <i className="flaticon-price-tag"></i>
                      </span>
                      <span className="text">{blog.category}</span>
                    </div>
                  </div>
                  <a href={blog.link} className="ul-blog-title">
                    {blog.title}
                  </a>
                  <a href={blog.link} className="ul-blog-btn">
                    Read More <span className="icon"><i className="flaticon-next"></i></span>
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

export default BlogSection;
