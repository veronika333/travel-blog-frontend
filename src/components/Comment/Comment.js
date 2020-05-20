import React from "react";
import './Comment.css'

const Comment = (props) => {
  return (
    <div className="single-comment">
      <h5 className="comment-author">{props.author}</h5>
      <p className="comment-content">{props.content}</p>
      <img src={props.imageUrl} alt={props.imageUrl} />
    </div>
  );
};

export default Comment;
