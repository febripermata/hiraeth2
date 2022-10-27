import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import { Survey } from "../../../../api/survey";

export default function index() {
  const surveys = useTracker(() => Survey.find().fetch());

  const handleDelete = (id) => {
    Survey.remove({ _id: id });
  };

  return (
    <div className="contact">
      <div id="contact" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h6>Contact Us</h6>
                <h2>
                  Fill out the form below to <span>Get</span> In <em>Touch</em>{" "}
                  With Us
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {surveys.map((survey) => (
              <div className="container col-lg-4 p-0 ps-4" key={survey._id}>
                <div className="action toggle">
                  <button className="del-btn" onClick={() => handleDelete(survey._id)}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <div
                  className="service-item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-4">
                      <div className="icon">
                        <img src="/images/acc.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="right-content">
                        <p>{survey.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
