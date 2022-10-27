import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Quotes } from "../../../api/quotes";

export default function index() {
  const quotes = useTracker(() => Quotes.find().fetch());

  return (
    <div className="quotes">
      <div id="quotes" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h6>Quotes</h6>
                <h2>
                  How was your day? <span>please </span> read{" "}
                  <em>these first!</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {quotes.map((quote) => (
              <div className="col-lg-4" key={quote._id}>
                <div
                  className="service-item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="icon">
                        <img src="/images/love.jfif" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="right-content">
                        <p>
                          {quote.quote} <br /> <br />~ {quote.author} ~
                        </p>
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
