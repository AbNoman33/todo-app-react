import React from "react";
import { FiTrash2 } from "react-icons/fi";
import "./Todo.scss";
import { Button } from "react-bootstrap";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleDelete = (id) => {
    props.onRemoveItem(id);
  };
  return (
    <article className="mytodo">
      <div className="todoinfo">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="todobtn">
        <Button variant="danger" size="sm" onClick={() => handleDelete(id)}>
          <FiTrash2 />
        </Button>
      </div>
    </article>
  );
};

export default Todo;
