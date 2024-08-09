const {Item, db} = require('../server/models/item');


const item = {
    name: 'Item Name',
    description: 'Item Description',
    price: 500,
    category: 'Item Category',
    image: 'item.jpg',
};

//Unit tests that must pass before code could be pushed to main branch. Ensuring quality of code.
describe  ('Item Model', () => {
    beforeAll (async () => await Item.create(item));

    it('should have a name', () => {
        expect(typeof item.name).toBe('string');
    });
     it('should have a description', () => {
         expect(typeof item.description).toBe('string');
    });
    it('should have a price', () => {
        expect(typeof item.price).toBe('number');
    });
    it('should have a category', () => {
        expect(typeof item.category).toBe('string');
    });
    it('should have an image', () => {
        expect(typeof item.image).toBe('string');
    });
})