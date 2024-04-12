// + Changed from SaucesList.js to ItemList.js

import React from 'react';
import { Item } from './item';

export const ItemList = ({ items }) => {
	
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
