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
              <Button variant="warning" size="smd" onClick={props.modalHandler}>Cancel</Button>
              <Button variant="warning" size="smd" onClick={props.deleteHandler}>Delete</Button>
            </Modal.Footer>
        </Modal.Dialog>
</div>  
    )
};
export default DeletePopup;