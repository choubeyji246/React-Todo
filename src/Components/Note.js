import React from "react";

export default function Note(props) {

    function remove() {
props.onDelete(props.id)
      }

  return (
    <div>
      <h1>
        <u>Todo</u>
      </h1>
      <div className="card">
        <ul>
          <li>
            <h3>{props.title}</h3>
          </li>
          <li className="desc">{props.content}</li>
        </ul>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
}
