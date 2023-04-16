import React, { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import "./Newtodo.scss";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
    //console.log(todo);
  };
  return (
    <>
      <Row>
        <Col className="col-md-6">
          <Card className="mycard">
            <h2>New Todo</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
              <div className="my-2">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="my-2">
                <label htmlFor="desc">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="desc"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                />
              </div>
              <div className="my-2">
                <Button type="submit">Add Todo</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewTodo;
