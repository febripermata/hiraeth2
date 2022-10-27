import React, { useState } from "react";
import { Survey } from "../../../api/survey";

export default function index() {
  const [answer, setAnswer] = useState({
    name: "",
    surename: "",
    email: "",
    subject: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    createdAt: new Date(),
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Survey.insert(answer)
    
    setAnswer({
      ...answer,
      name: "",
      surename: "",
      email: "",
      subject: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
      answer7: "",
    });
  };

  return (
    <div className="contactUs">
      <div id="contact" className="contact-us pb-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" method="post" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>Contact Us</h6>
                      <h2>
                        Fill out the form below to <span>Get</span> In{" "}
                        <em>Touch</em> With Us
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            autoComplete="on"
                            required
                            onChange={(e) =>
                              setAnswer({ ...answer, name: e.target.value })
                            }
                            value={answer.name}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="surname"
                            name="surname"
                            id="surname"
                            placeholder="Surname"
                            autoComplete="on"
                            required
                            onChange={(e) =>
                              setAnswer({ ...answer, surename: e.target.value })
                            }
                            value={answer.surename}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email"
                            required
                            onChange={(e) =>
                              setAnswer({ ...answer, email: e.target.value })
                            }
                            value={answer.email}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="subject"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            autoComplete="on"
                            onChange={(e) =>
                              setAnswer({ ...answer, subject: e.target.value })
                            }
                            value={answer.subject}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <div className="qna-box">
                          <p className="text-start">
                            1. Apa yang membuatmu tenang?
                          </p>
                          <div className="mt-2 mb-3">
                            <p className="heading-answer fw-bold text-start mb-2">
                              Answer
                            </p>
                            <fieldset>
                              <input
                                type="answer"
                                name="answer"
                                id="answer"
                                placeholder="Answer"
                                autoComplete="on"
                                onChange={(e) =>
                                  setAnswer({
                                    ...answer,
                                    answer1: e.target.value,
                                  })
                                }
                                value={answer.answer1}
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="qna-box">
                            <p className="text-start">
                              2. Apakah ada seseorang yang selalu berada
                              disampingmu ketika kamu berada dalam situasi
                              buruk?
                            </p>
                            <div className="mt-2 mb-3">
                              <p className="heading-answer fw-bold text-start mb-2">
                                Answer
                              </p>
                              <fieldset>
                                <input
                                  type="answer"
                                  name="answer"
                                  id="answer"
                                  placeholder="Answer"
                                  autoComplete="on"
                                  onChange={(e) =>
                                    setAnswer({
                                      ...answer,
                                      answer2: e.target.value,
                                    })
                                  }
                                  value={answer.answer2}
                                />
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="qna-box">
                              <p className="text-start">
                                3. Apa yang kamu lakukan saat kamu merasa
                                tertekan?
                              </p>
                              <div className="mt-2 mb-3">
                                <p className="heading-answer fw-bold text-start mb-2">
                                  Answer
                                </p>
                                <fieldset>
                                  <input
                                    type="answer"
                                    name="answer"
                                    id="answer"
                                    placeholder="Answer"
                                    autoComplete="on"
                                    onChange={(e) =>
                                      setAnswer({
                                        ...answer,
                                        answer3: e.target.value,
                                      })
                                    }
                                    value={answer.answer3}
                                  />
                                </fieldset>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="qna-box">
                                <p className="text-start">
                                  4. Apakah ada tindakan menyakiti diri sendiri
                                  saat kamu tertekan? Jika ada, bagaimana
                                  rasanya?
                                </p>
                                <div className="mt-2 mb-3">
                                  <p className="heading-answer fw-bold text-start mb-2">
                                    Answer
                                  </p>
                                  <fieldset>
                                    <input
                                      type="answer"
                                      name="answer"
                                      id="answer"
                                      placeholder="Answer"
                                      autoComplete="on"
                                      onChange={(e) =>
                                        setAnswer({
                                          ...answer,
                                          answer4: e.target.value,
                                        })
                                      }
                                      value={answer.answer4}
                                    />
                                  </fieldset>
                                </div>
                              </div>
                              <div className="qna-box">
                                <p className="text-start">
                                  5. Katakan sesuatu pada dirimu yang sekarang.
                                </p>
                                <div className="mt-2 mb-3">
                                  <p className="heading-answer fw-bold text-start mb-2">
                                    Answer
                                  </p>
                                  <fieldset>
                                    <input
                                      type="answer"
                                      name="answer"
                                      id="answer"
                                      placeholder="Answer"
                                      autoComplete="on"
                                      onChange={(e) =>
                                        setAnswer({
                                          ...answer,
                                          answer5: e.target.value,
                                        })
                                      }
                                      value={answer.answer5}
                                    />
                                  </fieldset>
                                </div>
                              </div>
                              <div className="qna-box">
                                <p className="text-start">
                                  6. Apa yang akan kamu sampaikan pada dirimu
                                  yang dulu?
                                </p>
                                <div className="mt-2 mb-3">
                                  <p className="heading-answer fw-bold text-start mb-2">
                                    Answer
                                  </p>
                                  <fieldset>
                                    <input
                                      type="answer"
                                      name="answer"
                                      id="answer"
                                      placeholder="Answer"
                                      autoComplete="on"
                                      onChange={(e) =>
                                        setAnswer({
                                          ...answer,
                                          answer6: e.target.value,
                                        })
                                      }
                                      value={answer.answer6}
                                    />
                                  </fieldset>
                                </div>
                              </div>
                              <div className="qna-box">
                                <p className="text-start">
                                  7. Dari 1-10 seberapa buruk masalahmu?
                                </p>
                                <div className="mt-2 mb-3">
                                  <p className="heading-answer fw-bold text-start mb-2">
                                    Answer
                                  </p>
                                  <fieldset>
                                    <input
                                      type="answer"
                                      name="answer"
                                      id="answer"
                                      placeholder="Answer"
                                      autoComplete="on"
                                      onChange={(e) =>
                                        setAnswer({
                                          ...answer,
                                          answer7: e.target.value,
                                        })
                                      }
                                      value={answer.answer7}
                                    />
                                  </fieldset>
                                </div>
                              </div>
                            </div>
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
                      <div className="col-lg-12">
                        <div className="contact-info mt-3">
                          <ul className="d-flex p-0 flex-row justify-content-center">
                            <li className="me-4 mb-0 text-center align-self-end">
                              <div className="icon">
                                <img
                                  src="/images/contact-icon-01.png"
                                  alt="email icon"
                                />
                              </div>
                              <a href="#">hiraeth@gmail.com</a>
                            </li>
                            <li className="me-4 mb-0 text-center align-self-end">
                              <div className="icon">
                                <img
                                  src="/images/contact-icon-02.png"
                                  alt="phone"
                                />
                              </div>
                              <a href="#">+6200000000</a>
                            </li>
                            <li className="me-4 mb-0 text-center align-self-end">
                              <div className="icon">
                                <img
                                  src="/images/contact-icon-03.png"
                                  alt="location"
                                />
                              </div>
                              <a href="#">Surabaya</a>
                            </li>
                          </ul>
                        </div>
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
