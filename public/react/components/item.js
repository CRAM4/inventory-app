import React, { useState } from 'react';

export const Item = (props) => {
  const [isClicked, setIsClicked] = useState(false) 
  const [isEditing, setIsEditing] = useState(false)
  const [updatedItem, setUpdatedItem] = useState({})
 
  //this handles the ability to click on one item and bring up one picture of specific item. 
	const handleClick =() => {
		setIsClicked(!isClicked)
	}

  //This handles deleting an item when button is clicked
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'DELETE',
      });
      if(!(response.status >= 200 && response.status < 300)) {
        throw new Error('HTTP ERROR' + response.status)
      }
      props.onDelete(props.item.id);
    } catch (error) {
      console.error('error deleting item', error);
    }
}
//function to handle update operation 
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/items/${props.item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(updatedItem),
      });
      if(!response.ok){
        throw new Error('HTTP error ' + response.status)
      }
      const data = await response.json();//parsing data and storing in variable called data.
      props.onUpdate(data.item);//calling the onUpdate function, passed as a prop, update item
      setIsEditing(false);
    } catch (error) {
      console.error('error update item', error);
    }
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
    <div onClick={handleClick} style={{cursor: 'pointer'}}>
    <h3>{props.item.name}</h3>
    </div>
    {isClicked && (
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

