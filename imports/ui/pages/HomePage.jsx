import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";
import StressRoom from "../components/StressRoom";

import "/public/css/templatemo-seo-dream.css";
import "/public/css/animated.css";
import "/public/css/owl.css";

const HomePage = () => {
  return (
    <div className="Home">
      <Navbar />
      <Home />
      <AboutUs />
      <Quotes />
      <ContactUs />
      <StressRoom />
    </div>
  );
};

export default HomePage;
