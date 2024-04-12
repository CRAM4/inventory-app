import React, { useState, useEffect } from 'react';
// + Import the ItemList component from './ItemList'
import { ItemList } from './ItemList';
// + Import the Form component from './Form'
import Form from './Form';

// + Import the apiURL from '../api'
import apiURL from '../api';

// + Define a functional component called App
export const App = () => {
	// + Declare a state variable called items with its setter function setItems
	// + The initial value of items is an empty array
	const [items, setItems] = useState([]);

	// + Define an asynchronous function called fetchItems
	async function fetchItems(){
		try {
			// + Send a GET request to the '/items' endpoint of the API
			const response = await fetch(`${apiURL}/items`);
			// + Parse the response body as JSON
			const itemsData = await response.json();
			
			// + Update the items state variable with the data from the response
			setItems(itemsData);
		} catch (err) {
			// + If an error occurred, log it to the console
			console.log("Oh no an error! ", err)
		}
	}

	// + Use the useEffect hook to call the fetchItems function when the component mounts
	useEffect(() => {
		fetchItems();
	}, []);

	// + Render a main element containing a Form component and an ItemList component
	// + The fetchItems function is passed as a prop to the Form component
	// + The items state variable is passed as a prop to the ItemList component
	return (
		<main>  
			<h1>Item Store</h1>
			<h2>All things🔥</h2>
			<h3>Refresh page to see items added or deleted</h3>
			<Form fetchItems={fetchItems} />
			<ItemList items={items} />
		</main>
	)
}