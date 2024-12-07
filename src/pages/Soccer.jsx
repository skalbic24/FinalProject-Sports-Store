import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';
import ItemModal from '../components/ItemModal'; // Import the modal

const Soccer = ({ port, onSave }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:${port}/soccerItems`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching soccer items:', error);
      }
    };
    fetchItems();
  }, [port]);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h1>Soccer Items</h1>
      {items.length > 0 ? (
        <ItemList items={items} onSave={onSave} onDescription={handleShow} />
      ) : (
        <p>No soccer items found.</p>
      )}
      {selectedItem && (
        <ItemModal show={showModal} handleClose={handleClose} item={selectedItem} />
      )}
    </div>
  );
};

export default Soccer;