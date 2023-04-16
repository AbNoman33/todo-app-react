import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Todos from "./Todos";
import "./home.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevState) => {
      return [...prevState, { id: uuidv4(), newTodo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevState) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <>
      <Container className="mycontainer">
        <h1
          style={{
            backgroundColor: "purple",
            color: "#fff",
            padding: "20px 30px",
            borderRadius: "5px",
          }}
        >
          Todo App
        </h1>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </Container>
    </>
  );
};

export default Home;
