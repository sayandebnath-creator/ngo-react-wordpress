import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("react-root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
});
