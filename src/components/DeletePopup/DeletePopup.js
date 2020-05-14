import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouteMatch, Link, useParams } from "react-router-dom";

const DeletePopup = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="DeletePopup">
<Modal.Dialog show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Are you sure you want to delete the experience? This action cannot be undone.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
    <Button variant="primary">Delete</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};
export default DeletePopup;