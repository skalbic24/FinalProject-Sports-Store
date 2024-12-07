import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ItemModal = ({ show, handleClose, item }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{item.description}</p>
        <p>Price: {item.price}</p>
        {/* You can add more details as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;