import React from "react";
import "./App.css";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li className="listName">{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
