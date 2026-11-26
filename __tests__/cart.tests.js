const {createCart, addItem, removeItem, countItems} = require('../src/cart')

describe('createCart', () => {
    test('возвращает пустой массив', () => {
        expect(createCart()).toEqual([]);
    });
});

describe('addItem', () => {
    test('добавляет новый товар', () => {
        const cart = createCart();
        const item = {id: '1', title: 'Книга', price: 500, quantity: 1, category: 'books'};
        const newCart = addItem(cart, item);
        expect(newCart).toHaveLength(1);
        expect(newCart[0]).toEqual(item);
    });
    test('увеличивает количество существующего товара', () => {
        const cart = createCart();
        const item = {id: '1', title: 'Книга', price: 500, quantity: 1, category: 'books'};
        const cart1 = addItem(cart, item);
        const cart2 = addItem(cart1, item);
        expect(cart2).toHaveLength(1);
        expect(cart2[0].quantity).toBe(2);
    });
});

describe('removeItem', () => {
    test('удаляет товар по id', () => {
        const cart = [
            {id: '1', title: 'Книга', price: 500, quantity: 1, category: 'books'},
            {id: '2', title: 'Телефон', price: 30000, quantity: 1, category: 'electronics'}
        ];
        const newCart = removeItem(cart, '1');
        expect(newCart).toHaveLength(1);
        expect(newCart[0].id).toBe('2');
    });
});

describe('countItems', () => {
    test('считает общее количество единиц', () => {
        const cart = [
            {id: '1', title: 'Книга', price: 500, quantity: 2, category: 'books'},
            {id: '2', title: 'Телефон', price: 30000, quantity: 3, category: 'electronics'}
        ];
        expect(countItems(cart)).toBe(5);
    });
});