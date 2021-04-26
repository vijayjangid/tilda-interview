import React from "react";
import "./style.css";

const Todo = ({ title, duration, created }) => {
  const createdDate = new Date(created);
  return (
    <div
      className="event-box todo"
      style={{
        marginTop: 60 * created.getHours() + "px"
      }}
    >
      <header>{title}</header>
      <small>
        {createdDate.toTimeString().slice(0, 5)} | {duration} Min
      </small>
    </div>
  );
};

export default Todo;
