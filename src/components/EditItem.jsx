import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:5000/basketballItems/${id}`);
      setItem(response.data);
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5001/basketballItems/${id}`, item);
    // Optionally redirect or notify user
  };

  if (!item) return null;

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
      <input type="text" value={item.price} onChange={(e) => setItem({ ...item, price: e.target.value })} />
      <input type="text" value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} />
      <input type="text" value={item.image} onChange={(e) => setItem({ ...item, image: e.target.value })} />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default EditItem;