import React, {useState} from "react";
import { StressRoom } from "../../../api/stressRoom";

export default function index() {
  const [share, setShare] = useState({
    message: "",
    createdAt: new Date()
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    StressRoom.insert(share)
    setShare({...share, message: ""})
  }
  return (
    <div className="stressRoom">
      <div id="stressRoom" className="contact-us mt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>Stress Room</h6>
                      <h2>
                        Just let everything <span>out</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            required
                            onChange={(e) => setShare({...share, message: e.target.value})}
                            value={share.message}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
