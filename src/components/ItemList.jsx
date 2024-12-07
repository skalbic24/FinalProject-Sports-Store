import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items, onSave, onDescription }) => {
  return (
    <div>
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onSave={onSave}           // Pass the save handler
          onDescription={onDescription} // Pass the description handler
        />
      ))}
    </div>
  );
};

export default ItemList;