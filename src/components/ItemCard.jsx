import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemCard = ({ item, onSave, onDescription }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} className="card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: {item.price}</Card.Text>
        <Button variant="success" onClick={() => onSave(item)}>Save</Button> {/* Save button */}
        <Button variant="info" onClick={() => onDescription(item)}>Description</Button> {/* Description button */}
      </Card.Body>
    </Card>
  );
};

export default ItemCard;