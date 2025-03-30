import React, { useState } from "react";

const SearchForm = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="ul-search-form-wrapper">
      {/* Close Button */}
      <button className="ul-search-closer" onClick={onClose}>
        <i className="flaticon-close"></i>
      </button>

      {/* Search Form */}
      <form className="ul-search-form" onSubmit={handleSubmit}>
        <div className="ul-search-form-right">
          <input
            type="search"
            name="search"
            id="ul-search"
            placeholder="Search Here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <span className="icon">
              <i className="flaticon-search"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
