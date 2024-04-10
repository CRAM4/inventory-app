import React, { useState } from 'react';

export const Item = (props) => {
  const [isClicked, setIsClicked] = useState(false) 
 
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


  return (
  <>
    <div onClick={handleClick} style={{cursor: 'pointer'}}>
    <h3>{props.item.name}</h3>

    </div>
    {isClicked && (
      <div>
        <img src={props.item.image} alt={props.item.name} />
        <p>{props.item.description}</p>
        <p>${props.item.price}</p>
        <p>{props.item.category}</p>
        <button onClick = {handleDelete}>Delete</button>
        </div>
      )}
  </>
  )
} 
