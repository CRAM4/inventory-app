import React, {useState} from 'react';
import { Item } from './item';

export const ItemList = ({ items }) => {
	const [isClicked, setIsClick] = useState(false) 

	const handleClick =() => {
		setIsClicked(!isClicked)
	}
	
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
