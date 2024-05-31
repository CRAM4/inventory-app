// + Changed from Sauces to item

// + Import the React library and the useState hook from 'react'
import React, { useState } from 'react';

// + Define a functional component called Item that takes props as an argument
export const Item = (props) => {
  // + Declare a state variable called isClicked with its setter function setIsClicked
  // + The initial value of isClicked is false
  const [isClicked, setIsClicked] = useState(false)

  // + Declare a state variable called isEditing with its setter function setIsEditing
  // + The initial value of isEditing is false
  const [isEditing, setIsEditing] = useState(false)

  // + Declare a state variable called updatedItem with its setter function setUpdatedItem
  // + The initial value of updatedItem is an empty object
  const [updatedItem, setUpdatedItem] = useState({})

  // + Define a function called handleClick that toggles the value of isClicked
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  // + This function is called when the delete button is clicked
  const handleDelete = async () => {
    try {
      // + Send a DELETE request to the server
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'DELETE',
      });
      // + If the server responds with an error status, throw an error
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      // + If the server responds with a success status, call the onDelete function
      props.onDelete(props.item.id);
    } catch (error) {
      // + If an error occurs, log it to the console
      console.error('Error deleting item', error);
    }
  }

  // + This function is called when the update button is clicked
}
//function to handle update operation 
  const handleUpdate = async () => {
    try {
      // + Send a PUT request to the server with the updated item data
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(updatedItem),
        body: JSON.stringify(updatedItem),
      });
      // + If the server responds with an error status, throw an error
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      // + If the server responds with a success status, update the item data
      const data = await response.json();
      props.onUpdate(data.item);
      // + Set isEditing to false to exit edit mode
      setIsEditing(false);
      const data = await response.json();//parsing data and storing in variable called data.
      props.onUpdate(data.item);//calling the onUpdate function, passed as a prop, update item
      setIsEditing(false);
    } catch (error) {
      // + If an error occurs, log it to the console
      console.error('Error updating item', error);
    }
  }

  // + This function is called when an input field changes
  const handleInputChange = (event) => {
    // + Update the updatedItem state with the new input value
    setUpdatedItem({
      ...updatedItem,
      [event.target.name]: event.target.value,
    });
  };

  // + This function is called when the edit button is clicked
  const handleEditClick = () => {
    // + Set isEditing to true to enter edit mode
    setIsEditing(true);
    // + Set the updatedItem state to the current item data
    setUpdatedItem(props.item);
  }
  //function to handle input change events  
  const handleInputChange = (event) => { 
    setUpdatedItem({
      ...updatedItem, 
      [event.target.name]: event.target.value, //responsible for updating the value of a field.
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setUpdatedItem(props.item);/*setting updated item state to the current item 
    (basically to make sure we're editing the item we selected to edit.)*/
  }



  return (
  <>
  {/* + This div is clickable and will trigger the handleClick function when clicked */}
  <div onClick={handleClick} style={{cursor: 'pointer'}}>
    {/* + The name of the item is displayed here */}
    <h3>{props.item.name}</h3>
    </div>
    {/* + If isClicked is true, the following div will be rendered */}
    {isClicked && (
    <div>
      {/* + If isEditing is true, a form with input fields and a save button is rendered */}
      {isEditing ? (
      <form>
        {/* + These input fields allow the user to edit the item's properties */}
        {/* + The handleInputChange function is called whenever the user types into the input fields */}
        <input name="name" value={updatedItem.name} onChange={handleInputChange} />
        <input name="description" value={updatedItem.description} onChange={handleInputChange} />
        <input name="price" value={updatedItem.price} onChange={handleInputChange} />
        <input name="category" value={updatedItem.category} onChange={handleInputChange} />
        {/* + When the save button is clicked, the handleUpdate function is called */}
        <button onClick={handleUpdate}>Save</button>
        </form>
        ) : (
        <>
        {/* + If isEditing is false, the item's details and delete/edit buttons are rendered */}
        <img src={props.item.image} alt={props.item.name} />
        <p>{props.item.description}</p>
        <p>${props.item.price}</p>
        <p>{props.item.category}</p>
        {/* + When the delete button is clicked, the handleDelete function is called */}
        <button onClick={handleDelete}>Delete</button>
        {/* + When the edit button is clicked, the handleEditClick function is called */}
        <button onClick={handleEditClick}>Edit</button>
        </>
        )}
      <div>
        {isEditing ? (
          <form>
            <input name = "name" value = {updatedItem.name} onChange = {handleInputChange} />
            <input name = "description" value = {updatedItem.description} onChange = {handleInputChange} />
            <input name = "price" value = {updatedItem.price} onChange = {handleInputChange} />
            <input name = "category" value = {updatedItem.category} onChange = {handleInputChange} />
            <button onClick = {handleUpdate}>Save</button>
          </form>
        ) : ( 
        <>
          <img src={props.item.image} alt={props.item.name} />
          <p>{props.item.description}</p>
          <p>${props.item.price}</p>
          <p>{props.item.category}</p>
          <button onClick = {handleDelete}>Delete</button>
          <button onClick = {handleEditClick}>Edit</button> 
        </>
        )}  
        </div>
      )}
    </>
  ) 
}
  </>
  )
}

