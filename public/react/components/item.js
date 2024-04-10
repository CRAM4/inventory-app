import React, { useState } from 'react';

export const Item = (props) => {
  const [isClicked, setIsClicked] = useState(false) 

	const handleClick =() => {
		setIsClicked(!isClicked)
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
        <button>delete</button>
        </div>
      )}
  </>
  )
} 
