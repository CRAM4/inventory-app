const {Item, db} = require('../server/models/item');


const item = {
    name: 'Item Name',
    description: 'Item Description',
    price: 1100,
    category: 'Item Category',
    image: 'item.jpg',
};

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