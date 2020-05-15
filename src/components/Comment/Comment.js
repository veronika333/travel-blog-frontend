import React from "react";

const Comment = (props) => {
  return (
    <div>
      <h5>{props.author}</h5>
      {props.children}
    </div>
  );
};

export default Comment;
