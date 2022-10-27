import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/Admin/ContactUs";
import Navbar from "../components/Navbar";
import Quotes from "../components/Admin/Quotes";
import StressRoom from "../components/Admin/StressRoom";

import "/public/css/templatemo-seo-dream.css";
import "/public/css/form.css";
import "/public/css/animated.css";
import "/public/css/owl.css";

const AdminPage = () => {
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

export default AdminPage;
