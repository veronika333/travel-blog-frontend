import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import axios from "axios";
const CommentList = () => {
  const [getComment, setGetComment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/experience/:id/comment")
      .then((response) => {
        const comments = response.data;
        setGetComment(comments);
        console.log(response);
      });
  }, []);

  const commentList = getComment.map((comment) => {
    return (
      <Comment
        key={comment._id}
        author={comment.author}
        content={comment.content}
        src={comment.imageUrl}
        alt={comment.imageUrl}
      />
    );
  });
  return <div>{commentList}</div>;
};

export default CommentList;