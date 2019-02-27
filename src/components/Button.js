import React from "react";

export default function Button(props) {
  return (
    <button
      className="todo-button todo-button--primary"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
