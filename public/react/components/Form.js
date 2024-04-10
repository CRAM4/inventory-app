import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newItem = { name, description, price, category };
        try {
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
        } catch (error) {
            console.error('Error adding item', error);
        }
    };

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