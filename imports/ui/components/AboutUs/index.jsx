import React from "react";

export default function index() {
  return (
    <div className="aboutUs">
      <div id="about" className="about-us pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="left-image wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src="/images/about-left-image.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="section-heading">
                <h6>About Us</h6>
                <h2>
                  <em>A</em> health specialist application that will help you to
                  solve your mental health problems{" "}
                  <span> Let's join with us</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>750+</h4>
                    <h6>problems solved</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>340+</h4>
                    <h6>happy clients</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>128+</h4>
                    <h6>awards</h6>
                  </div>
                </div>
              </div>
              <p>
                <a
                  rel="nofollow"
                  href="https://templatemo.com/tm-563-seo-dream"
                  target="_parent"
                >
                  HIRAETH{" "}
                </a>{" "}
                is a mental health support application provided for those who
                need mental health support.
              </p>
              <div className="main-green-button">
                <a href="#">Discover company</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
