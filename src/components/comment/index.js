import React from "react";

export default function Comment(props) {
  let { body, name } = props;
  return (
    <div className="container">
      <div className="row">{body}</div>
      <div className="row d-flex justify-content-center">{name}</div>
    </div>
  );
}
