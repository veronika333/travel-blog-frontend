import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouteMatch, Link, useParams } from "react-router-dom";

const style = {
    wrapper: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: '10vw',
    },
    modal : {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(155,155,154)',
    }

}

const DeletePopup = (props) => {
    return (
        // <div style = {style.wrapper}>
        //     <div style = {style.modal}>
        //         <h1>Hi there!</h1>
        //         <button onClick={props.modalHandler}>Cancel</button>
        //         <button onClick={props.deleteHandler}>Delete</button>
        //     </div>
        // </div>

        <Modal.Dialog style = {style.wrapper}>
            <Modal.Header closeButton>
              <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete the post?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.modalHandler}>Cancel</Button>
              <Button variant="primary" onClick={props.deleteHandler}>Accept</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
};
export default DeletePopup;