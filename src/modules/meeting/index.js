import React from "react";
import "./style.css";

const Meeting = ({ title, start, end }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return (
    <div
      className="event-box meeting"
      style={{
        marginTop: 60 * startDate.getHours() + "px"
      }}
    >
      <header>{title}</header>
      <small>
        {startDate.toTimeString().slice(0, 5)} -{" "}
        {endDate.toTimeString().slice(0, 5)}
      </small>
    </div>
  );
};

export default Meeting;
