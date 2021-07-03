import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Button } from "../common/";
import { getRandomInt } from "../../ulti";

export default function Post(props) {
  let { title, body, userId } = props;
  let commentCount = getRandomInt(0, 10);
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4> {title} </h4>
        <p> {body} </p>
        <footer>
          <Link
            className={commentCount === 0 ? "disabled-link" : "active"}
            to={`/comments/${userId}`}
          >
            <Button disabled={commentCount === 0 ? true : false}>
              Comments ({commentCount})
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
}
