import React from "react";
import "./Styling/Photos.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Photos(props) {
  let photos = props.photos;

  if (photos) {
    return (
      <Card bg="light">
        <Row className="text-center">
          {photos.map(function (photo, index) {
            return (
              <Col>
                <span key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img className="picture" src={photo.src.landscape} alt="" />
                  </a>
                </span>
              </Col>
            );
          })}
          ;
        </Row>
      </Card>
    );
  } else {
    return null;
  }
}
