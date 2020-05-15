import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
const CommentBox = () => {
  return (
    <div>
      <h2>Comments</h2>
      <CommentList />
      <CommentForm />
    </div>
  );
};

export default CommentBox;
