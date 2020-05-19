import React from "react";

const Comment = (props) => {
  return (
    <div>
      <h5>{props.author}</h5>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt={props.imageUrl} />
    </div>
  );
};

export default Comment;
