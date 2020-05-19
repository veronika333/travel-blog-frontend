import React from "react";
import CommentList from "../CommentList/CommentList";
import axios from "axios";
const CommentBox = () => {
  return (
    <div>
      <h2>Comments</h2>
      <CommentList />
    </div>
  );
};

export default CommentBox;
