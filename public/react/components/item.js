// Import the React library and the useState hook from 'react'
import React, { useState } from 'react';

// Define a functional component called Item that takes props as an argument
export const Item = (props) => {
  // Declare state variables
  const [isClicked, setIsClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});

  // Toggle the value of isClicked
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Handle the delete operation
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      props.onDelete(props.item.id);
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  // Handle the update operation
  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    try {
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const data = await response.json();
      props.onUpdate(data.item);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating item', error);
    }
  };

  // Handle input change for updates
  const handleInputChange = (event) => {
    setUpdatedItem({
      ...updatedItem,
      [event.target.name]: event.target.value,
    });
  };

  // Enter edit mode
  const handleEditClick = () => {
    setIsEditing(true);
    setUpdatedItem(props.item);
  };

  return (
    <>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <h3>{props.item.name}</h3>
      </div>
      {isClicked && (
        <div>
          {isEditing ? (
            <form onSubmit={handleUpdate}>
              <input name="name" value={updatedItem.name} onChange={handleInputChange} />
              <input name="description" value={updatedItem.description} onChange={handleInputChange} />
              <input name="price" value={updatedItem.price} onChange={handleInputChange} />
              <input name="category" value={updatedItem.category} onChange={handleInputChange} />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <img src={props.item.image} alt={props.item.name} />
              <p>{props.item.description}</p>
              <p>${props.item.price}</p>
              <p>{props.item.category}</p>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEditClick}>Edit</button>
            </>
          )}
        </div>
      )}
    </>
  );
};


