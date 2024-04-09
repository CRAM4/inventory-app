import React from 'react';
import {Item} from './item';

export const ItemList = ({item}) => {
	return <>
		{
			item.map((Item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
