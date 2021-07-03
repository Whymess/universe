import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-primary" disabled={props.disabled} type="button">
      {props.children}
    </button>
  );
}
