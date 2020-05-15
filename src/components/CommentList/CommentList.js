import React from "react";
import Comment from "../Comment/Comment";
const CommentList = () => {
  return (
    <div>
      <h3>Showing comments below</h3>
      <Comment author="Emily">Awesome</Comment>
      <Comment author="Dani">What a great trip</Comment>
    </div>
  );
};

export default CommentList;
