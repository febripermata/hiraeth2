import React from "react";

export default function index() {
  const handleLogOut = () => {
    sessionStorage.removeItem("role");
    FlowRouter.go("/login");
  };

  const checkAdmin = sessionStorage.getItem("role") ? true : false;

  return (
    <div className="home">
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-sm-4"></div>
                      <div className="col-lg-4 col-sm-4"></div>
                      <div className="col-lg-4 col-sm-4"></div>
                      <div className="col-lg-12">
                        <h2>HIRAETH YOUR SAVIOR</h2>
                      </div>
                      {checkAdmin ? (
                        <div className="col-lg-12 d-flex align-items-center">
                          <div className="main-green-button scroll-to-section me-2">
                            <a href="#contact">Get Your Quote</a>
                          </div>
                          <div className="main-green-button scroll-to-section">
                            <a onClick={handleLogOut}>Log Out</a>
                          </div>
                        </div>
                      ) : (
                        <div className="col-lg-12">
                          <div className="main-green-button scroll-to-section me-2">
                            <a href="#contact">Get Your Quote</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="/images/banner-right-image.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
