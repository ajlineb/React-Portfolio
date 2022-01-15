import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="info">
      <Row className="align-items-center contact-title">
        <Col md="6">
          <h1 className="title">Contact</h1>
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="email"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <div className="form-group">
                <label htmlFor="textField">Leave a message!</label>
                <textarea
                  className="form-control"
                  id="textField"
                  rows="10"
                  placeholder="Enter Text"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </Col>
        <Col md="6">
          <h1 className="title other-comms-title">
            Other means of Communication!
          </h1>
          <br></br>
          <h3 className="comm-info">Phone: 984-265-0534</h3>
          <h3 className="comm-info">Email: anthonylinebaugh95@gmail.com</h3>
        </Col>
      </Row>
    </div>
  );
}
