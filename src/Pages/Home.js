import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className="info">
      <h1 className="title">About Me</h1>
      <img
        id="avatar"
        src="https://avatars.githubusercontent.com/u/85193301?s=400&u=fffb9fac57512d6785cf1f3ff9006aff24e541ff&v=4"
        alt="my face!"
      />
      <Row>
        <Col md="6">
          <p>
            Hello! I am from Bear Creek North Carolina. I have been working in
            retail for four years now at Wal-Mart since I graduated from North
            Carolina A&T State University. I have a degree in Biomedical
            engineering and have extensive experience with bio-imaging devices
            such as Ultrasound, MRI, and CT scanning. I enjoy using software to
            look at the images and explain what is occuring in them.
          </p>
          <p>
            In my off time I enjoy creating 3D models to use in virtual reality
            environments, and learning more about computers and their hardware.
            I have even gone so far as to build my own custom PC that I use to
            do a lot of my work with currently but to also play a lot of video
            games.
          </p>
          <p>
            As far as web-devolopment, I have thoroughly enjoyed working with
            vanilla JavaScript but know how to use jQuery and pulling
            information from 3rd party websites to make useful webpages that
            solve real world issues. Developing highly responsive webpages with
            javascript that are both mobile friendly and accessable for all
            types of users. Checkout some of my works in the next tab, they are
            some of the webpages I have worked on my own and two of which were
            projects with a team!
          </p>
        </Col>
        <Col>
          <Row>
            <Col className="languages-container">
              <img
                id="knownLang"
                src={require("../images/javascript.png")}
                alt="Space website"
              ></img>
              <img
                id="knownLang"
                src={require("../images/React.png")}
                alt="Space website"
              ></img>
              <img
                id="knownLang"
                src={require("../images/css.png")}
                alt="Space website"
              ></img>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col className="languages-container">
              <img
                id="knownLang"
                src={require("../images/nodeJs.png")}
                alt="Space website"
              ></img>
              <img
                id="knownLang"
                src={require("../images/mySQL.png")}
                alt="Space website"
              ></img>
              <img
                id="knownLang"
                src={require("../images/mongoDB.png")}
                alt="Space website"
              ></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
