import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DeletePopup.css";

const DeletePopup = (props) => {

  return (

    <div className="overlay">
      <Modal.Dialog centered>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure that you want to delete permanently the selected experience?</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.modalHandler}>Cancel</button>
          <button className="delete" onClick={props.deleteHandler}>Delete</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
};
export default DeletePopup;