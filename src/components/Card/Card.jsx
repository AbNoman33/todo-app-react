import React from "react";
import "./Card.scss";
import Button from "react-bootstrap/Button";

const Card = () => {
  return (
    <div className="mycard-body">
      <h2>I am from Card component</h2>
      <Button variant="primary">Send</Button>
    </div>
  );
};

export default Card;
