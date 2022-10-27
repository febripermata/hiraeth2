import React from "react";

export default function index(){
  return (
    <div className="navbar">
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  <h4>
                    HIRAETH <img src="/images/logo-icon.png" alt="" />
                  </h4>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#quotes">Qoutes</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#stressRoom">Stress Room</a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-blue-button">
                      <a href="#contact">Get Your Quote</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
