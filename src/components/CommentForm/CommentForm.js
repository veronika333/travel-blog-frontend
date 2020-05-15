import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = (props) => {
  return (
    <div>
      <Form style={{ width: "30%" }}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" defaultValue={props.author} />
        </Form.Group>
        <Form.Group controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            name="content"
            defaultValue={props.content}
          />
        </Form.Group>
        <Button onClick={props.sendHandler}>Send</Button>
      </Form>
    </div>
  );
};

export default CommentForm;
