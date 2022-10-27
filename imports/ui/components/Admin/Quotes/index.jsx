import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Quotes } from "../../../../api/quotes";

export default function index() {
  const [showForm, setShowForm] = useState(false);
  const onClick = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const [showEditForm, setshowEditForm] = useState(false);
  const closeEditForm = () => setshowEditForm(false);
  const [editId, setEditId] = useState("");
  const editForm = (quoteId) => {
    setEditId(quoteId);
    setshowEditForm(true);
  };

  const handleDelete = (id) => {
    Quotes.remove({ _id: id });
  };

  const editQuote = useTracker(() => Quotes.findOne({ _id: editId }));
  const quotes = useTracker(() => Quotes.find().fetch());

  const Form = () => {
    const [data, setData] = useState({
      quote: "",
      author: "",
      createdAt: new Date(),
    });

    const submitHandler = () => {
      Quotes.insert(data);
    };

    return (
      <div className="formContainer ps-4 d-flex justify-content-center align-items-center">
        <div className="quotesForm">
          <form
            className="d-flex flex-column justify-content-start"
            onSubmit={submitHandler}
          >
            <div className="col-12 p-4 d-flex justify-content-between align-items-start">
              <h3 className="m-0">Add Quote</h3>
              <button onClick={closeForm}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="col p-4">
              <div className="form-group mb-3">
                <label htmlFor="quote">Quote</label>
                <textarea
                  required
                  className="form-control"
                  type="text"
                  name="quote"
                  id="quote"
                  rows="5"
                  onChange={(e) => setData({ ...data, quote: e.target.value })}
                />
              </div>
              <div className="form-group row g-3">
                <div className="col-md-12 mb-3">
                  <label htmlFor="author">Author</label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="author"
                    id="author"
                    onChange={(e) =>
                      setData({ ...data, author: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="submitForm text-end p-4">
              <button className="main-green-button">
                <a>Save</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const EditForm = () => {
    const [data, setData] = useState({
      quote: editQuote.quote,
      author: editQuote.author,
      createdAt: new Date(),
    });

    const submitHandler = (e) => {
      e.preventDefault();
      Quotes.update({ _id: editId }, { $set: data });
    };

    return (
      <div className="formContainer ps-4 d-flex justify-content-center align-items-center">
        <div className="quotesForm">
          <form
            className="d-flex flex-column justify-content-start"
            onSubmit={submitHandler}
          >
            <div className="col-12 p-4 d-flex justify-content-between align-items-start">
              <h3 className="m-0">Edit Quote</h3>
              <button onClick={closeEditForm}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="col p-4">
              <div className="form-group mb-3">
                <label htmlFor="quote">Quote</label>
                <textarea
                  required
                  className="form-control"
                  type="text"
                  name="quote"
                  id="quote"
                  rows="5"
                  onChange={(e) => setData({ ...data, quote: e.target.value })}
                  value={data.quote}
                />
              </div>
              <div className="form-group row g-3">
                <div className="col-md-12 mb-3">
                  <label htmlFor="author">Author</label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="author"
                    id="author"
                    onChange={(e) =>
                      setData({ ...data, author: e.target.value })
                    }
                    value={data.author}
                  />
                </div>
              </div>
            </div>
            <div className="submitForm text-end p-4">
              <button className="main-green-button">
                <a>Save</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="adminQuotes quotes">
      {showForm ? <Form /> : null}
      {showEditForm ? <EditForm /> : null}
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
                <div className="main-green-button">
                  <a onClick={onClick}>Add Quotes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {quotes.map((quote) => (
              <div className="container col-lg-4 p-0 ps-4" key={quote._id}>
                <div className="action d-flex flex-row">
                  <div className="toggle">
                    <button onClick={() => editForm(quote._id)}>
                      <i className="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                  <div className="toggle">
                    <button
                      className="del-btn"
                      onClick={() => handleDelete(quote._id)}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>
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
