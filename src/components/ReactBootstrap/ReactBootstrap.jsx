import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ReactBootstrap = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Card style={{ width: "20rem" }} className="ms-5 my-5">
      <Card.Body>
        <Card.Title>
          <h2>Count: {count}</h2>
        </Card.Title>
        <Card.Text>
          <Button variant="danger" onClick={handleIncrement}>
            Click
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrap;
