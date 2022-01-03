import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="info">
      <h1 className="title">Contact</h1>
      <Row className="align-items-center">
        <Col md="6">
          <form className="form-container">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="email"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <div class="form-group">
                <label for="textField">Leave a message!</label>
                <textarea
                  class="form-control"
                  id="textField"
                  rows="10"
                  placeholder="Enter Text"
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
