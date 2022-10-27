import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import { StressRoom } from "../../../../api/stressRoom";

export default function index() {
  const stressRooms = useTracker(() => StressRoom.find().fetch());

  const handleDelete = (id) => {
    StressRoom.remove({ _id: id });
  };
  return (
    <div className="stressRoom">
      <div id="stressRoom" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h6>Stress Room</h6>
                <h2>
                  Just let everything <span>out</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {stressRooms.map((stressRoom) => (
              <div className="container col-lg-4 p-0 ps-4" key={stressRoom._id}>
                <div className="action toggle">
                  <button className="del-btn" onClick={() => handleDelete(stressRoom._id)}>
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
                        <p>User</p>
                        <p>{stressRoom.message}</p>
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
