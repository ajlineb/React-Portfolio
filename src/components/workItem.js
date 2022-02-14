import React from "react";
import data from "../utils/workList";
import { Col } from "react-bootstrap";
import Loading from "../utils/Loading";

export default function WorkItem() {
  console.log(data.length);
  return (
    <>
      {data.length ? (
        data.map((d) => {
          return (
            <Col key={d.id} sm="6" className="image-container">
              <a id="linkContainer" href={d.deployLink}>
                <img id="showcase" src={d.img.src} alt={d.img.alt}></img>
                <p className="text-block">
                  {d.projectName}
                  <br></br>
                  <a href={d.gitLink}>
                    <img id="gitLink" src={d.gitImg.src} alt={d.gitImg.alt} />
                  </a>
                </p>
              </a>

              <p id="workInfo">{d.info}</p>
            </Col>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}