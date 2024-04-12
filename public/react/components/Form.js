// + added Form
import React, { useState } from 'react';

// + Define a functional component called Form
function Form() {
    // + Declare state variables for name, description, price, and category with their respective setter functions
    // + The initial values are all empty strings
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    // + Define an asynchronous function called handleSubmit that will be triggered when the form is submitted
    const handleSubmit = async (event) => {
        // + Prevent the default form submission behavior
        event.preventDefault();
        // + Create a new item object with the current values of the state variables
        const newItem = { name, description, price, category };
        try {
            // + Send a POST request to the '/api/items' endpoint with the new item as the request body
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            // + If the response is not ok (status code is not in the range 200-299), throw an error
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            // + If the request was successful, reset the state variables to their initial values
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
        } catch (error) {
            console.error('Error adding item', error);
        }
    };

    // + Render a form with input fields for name, description, price, and category, and a submit button
    // + When the form is submitted, the handleSubmit function is called
    // + When the value of an input field changes, the corresponding state variable is updated
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Price:
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                Category:
                <input value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default Form;