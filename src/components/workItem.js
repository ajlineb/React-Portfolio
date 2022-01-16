import React from "react";
import data from "../utils/workList";
import { Col } from "react-bootstrap";

export default function WorkItem() {
  console.log(data);
  return data.map((d) => (
    <Col key={d.id} sm="6" className="image-container">
      <a href={d.deployLink}>
        <img id="showcase" src={d.img.src} alt={d.img.alt}></img>
      </a>
      <p className="text-block">
        {d.projectName}
        <br></br>
        <a href={d.gitLink}>
          <img id="gitLink" src={d.gitImg.src} alt={d.gitImg.alt} />
        </a>
      </p>
    </Col>
  ));
}
