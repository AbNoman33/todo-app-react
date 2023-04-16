import React from "react";
import Todo from "./Todo";
import "./Todos.scss";

const Todos = (props) => {
  //console.log(props);
  return (
    <section className="mytodos">
      {props.todos.map((todo) => (
        <Todo
          todo={todo.newTodo}
          key={todo.id}
          id={todo.id}
          onRemoveItem={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
