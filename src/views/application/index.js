import React, { useEffect } from "react";
import { Post, Loader } from "../../components";
import { useGetPosts } from "../../api/posts";

export default function Application() {
  const { data, execute, isLoading } = useGetPosts();

  useEffect(() => {
    try {
      execute();
    } catch (error) {
      return "There was an error :(";
    }
  }, [execute]);

  function renderPosts() {
    return (
      data &&
      data.map((el, i) => {
        let { body, title, userId } = el;
        return <Post key={i} userId={userId} body={body} title={title} />;
      })
    );
  }

  return (
    <div className="timeline-container container">
      {isLoading ? <Loader /> : renderPosts()}
    </div>
  );
}
