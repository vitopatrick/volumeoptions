import React from "react";
import AboutOurMission from "../../components/landing-page/about/about-our-mission";
import AboutWelcome from "../../components/landing-page/about/about-welcome";
import Footer from "../../components/landing-page/footer/Footer";
import Navbar from "../../components/landing-page/nav-bar";

const AboutUs = () => {
  return (
    <div className="bg-bg">
      <Navbar />
      <AboutWelcome />
      <AboutOurMission />
      <Footer />
    </div>
  );
};

export default AboutUs;
