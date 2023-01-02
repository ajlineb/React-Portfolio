import React, { useState, useEffect } from "react";
import { validEmail, validName, validText } from "../utils/regex";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  const initialValues = { name: "", email: "", text: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrs, setFormErrs] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //important that you put a "name" or whatever you want to call it in the input tags info area so that it knows which "name" key to put to the value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrs(validate(formValues));
    setIsSubmit(true);
  };

  //this is used to check that the info is coming through correctly
  // useEffect(() => {
  //   console.log(formErrs, "errors");
  //   if (Object.keys(formErrs).length === 0 && isSubmit) {
  //     //console.log(formValues, "values");
  //   }
  // }, [formErrs]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please type your name";
    } else if (!validName.test(values.name)) {
      errors.name = "Not a valid name";
    }
    if (!values.email) {
      errors.email = "Please type your email";
    } else if (!validEmail.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.text) {
      errors.text = "Text field is not complete";
    } else if (!validText.test(values.text)) {
      errors.text = "Please type more than a few words";
    }
    return errors;
  };

  console.log(formValues);
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
                name="name"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p id="err">{formErrs.name}</p>
              <div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p id="err">{formErrs.email}</p>
              <div className="form-group">
                <label htmlFor="textField">Leave a message!</label>
                <textarea
                  className="form-control"
                  id="textField"
                  name="text"
                  rows="10"
                  placeholder="Enter Text under 200 characters"
                  value={formValues.text}
                  onChange={handleChange}
                ></textarea>
                <p id="err">{formErrs.text}</p>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={onSubmit}
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
