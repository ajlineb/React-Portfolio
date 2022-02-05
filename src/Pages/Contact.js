import React, { useState } from "react";
import { validEmail, validName, validText } from "../utils/regex";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(true);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [text, setText] = useState("");
  const [textErr, setTextErr] = useState(true);

  const validate = (e) => {
    e.preventDefault();
    if (!validName.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validText.test(text)) {
      setTextErr(true);
    } else {
      setTextErr(false);
    }
    if (!nameErr && !emailErr && !textErr) {
      //console.log({ nameErr, emailErr, textErr });
      setName("");
      setEmail("");
      setText("");
    }
  };

  return (
    <div className="info">
      <Row className="align-items-center contact-title">
        <Col md="6">
          <h1 className="title">Contact</h1>
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameErr && <p id="err">Your name is not valid</p>}{" "}
              <div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailErr && <p id="err">Your email is not valid</p>}
              <div className="form-group">
                <label htmlFor="textField">Leave a message!</label>
                <textarea
                  className="form-control"
                  id="textField"
                  rows="10"
                  placeholder="Enter Text under 200 characters"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                {textErr && <p id="err">You must have a valid entry!</p>}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={validate}
            >
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
