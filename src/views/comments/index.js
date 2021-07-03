import React, { useEffect } from "react";

import { useGetComments } from "../../api/comments";
import { Loader, Comment } from "../../components";
import { useParams } from "react-router-dom";

export default function Comments() {
  let { id } = useParams();
  const { data, execute, isLoading } = useGetComments();

  useEffect(() => {
    try {
      execute(id);
    } catch (error) {
      return error;
    }
  }, [execute, id]);

  function renderComments() {
    return (
      data &&
      data.map((el, i) => {
        return (
          <li key={i} className="list-group-item mt-2">
            <Comment body={el.body} name={el.name} />
          </li>
        );
      })
    );
  }

  return (
    <ul className="list-group">{isLoading ? <Loader /> : renderComments()}</ul>
  );
}
