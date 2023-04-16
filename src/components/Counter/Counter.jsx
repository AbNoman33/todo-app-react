import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <Card style={{ width: "20rem" }} className="ms-5 my-5">
        <Card.Body>
          <Card.Title>
            <h2>Count: {count}</h2>
          </Card.Title>
          <Card.Text>
            <Button variant="danger" onClick={this.handleIncrement}>
              Click
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
