import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';
import ItemModal from '../components/ItemModal';

const Basketball = ({ port, onSave }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:${port}/basketballItems`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching basketball items:', error); // Log error for debugging
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
      <h1>Basketball Items</h1>
      {items.length > 0 ? (
        <ItemList items={items} onSave={onSave} onDescription={handleShow} />
      ) : (
        <p>No basketball items found.</p>
      )}
      {selectedItem && (
        <ItemModal show={showModal} handleClose={handleClose} item={selectedItem} />
      )}
    </div>
  );
};

export default Basketball;