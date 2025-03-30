import React from "react";
import BannerSlider from "../components/BannerSlider";
import FeatureSection from "../components/FeatureSection";
import VolunteerSection from "../components/VolunteerSection";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import Layout from "../common/Layout";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
const Home = () => {
  return (
    <>
      <Layout>
        <BannerSlider />
        <FeatureSection />
        <VolunteerSection />
        <About />
        <ServicesSection />
        <ProjectSection/>
        <CTASection />
        <Testimonials />
        <ContactSection/>
        <BlogSection/>
      </Layout>
    </>
  );
};
export default Home;
