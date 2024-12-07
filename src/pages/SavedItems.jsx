import React from 'react';

const SavedItems = ({ savedItems, onDelete }) => {
  return (
    <div>
      <h1>Saved Items</h1>
      {savedItems.length > 0 ? (
        <ul>
          {savedItems.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <button onClick={() => onDelete(item.id)}>Delete</button> {/* Delete button */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved items found.</p>
      )}
    </div>
  );
};

export default SavedItems;