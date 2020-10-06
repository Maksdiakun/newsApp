import React from "react";
import Comment from "../Comment";

const CommentList = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map((el) => (
        <Comment el={el} key={el.date} />
      ))}
    </ul>
  );
};
export default CommentList;
