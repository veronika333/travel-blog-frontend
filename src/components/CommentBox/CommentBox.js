import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";
const CommentBox = () => {
  const newComment = () => {
    const [addComment, setAddComment] = useState({
      imageUrl: "",
      author: "",
      date: "",
    });
  const changeCommentValue = (c) => {
    setAddComment({
      ...addComment,
      [c.target.name]: c.target.value,
    });
  };
  const sendHandler = (c) => {
    c.preventDefault();
    axios.post("http://localhost:5000/experience/:postId/comment/" + comment_id, newComment);
  };
  return (
    <div>
      <h2>Comments</h2>
      <CommentList />
      <CommentForm onClick={sendHandler} onChange={changeCommentValue} />
    </div>
  );
};

export default CommentBox;
