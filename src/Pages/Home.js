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
            Hello! Every since highschool I have always been deeply interested
            in coding. During college I got to use MATLAB for engineers and it
            only peaked my interests. I developed highly responsive code for
            advanced calculations and graphical outputs using data from excel
            sheets. I graduated college with my Biomedical engineering degree,
            but still felt that itch for coding something, turning my ideas into
            something everyone else can see and use.
          </p>
          <p>
            I jumped into UNC Chapel Hill's boot camp program to do just that! I
            learned how to create webpages from the ground up using HTML, CSS,
            JavaScript, and many other softwares. I feel like with every error
            that I come across, it is just another example to learn from and
            learning from that gets me excited to keep going.
          </p>
          <p>
            In my off time I enjoy creating 3D models to use in virtual reality
            environments, and learning more about computers and their hardware.
            I have even gone so far as to build my own custom PC that I use to
            do a lot of my work with currently but to also play video games.
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
