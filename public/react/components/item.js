import React from 'react';

export const item = (props) => {

  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
  </>
} 
	