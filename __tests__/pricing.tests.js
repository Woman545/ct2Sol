const {getSubtotal, getQuantityDiscount, getCategoryDiscount, getBulkDiscount, getTotal, buildSummary} = require('../src/pricing')

describe('getSubtotal', () => {
    test('считает подытог корзины', () => {

        const cart = [
            {id: '1', title: 'Книга', price: 500, quantity: 2, category: 'books'},
            {id: '2', title: 'Телефон', price: 30000, quantity: 1, category: 'electronics'}
        ];

        expect(getSubtotal(cart)).toBe(31000);
    });
});

describe('getQuantityDiscount', () => {
    test('от 3 шт — 5%', () => {

        const item = {id: '1', title: 'Книга', price: 100, quantity: 3, category: 'books'};

        expect(getQuantityDiscount(item)).toBe(15);
    });
    test('от 5 шт — 10%', () => {
        const item = {id: '1', title: 'Книга', price: 100, quantity: 5, category: 'books'};
        expect(getQuantityDiscount(item)).toBe(50);
    });
    test('от 10 шт — 15%', () => {
        const item = {id: '1', title: 'Книга', price: 100, quantity: 10, category: 'books'};
        expect(getQuantityDiscount(item)).toBe(150);
    });
});

describe('getCategoryDiscount', () => {
    test('5% на книги и 7% на электронику при subtotal >= 10000', () => {

        const cart = [
            {id: '1', title: 'Книга', price: 500, quantity: 20, category: 'books'},
            {id: '2', title: 'Телефон', price: 25000, quantity: 1, category: 'electronics'}
        ];

        expect(getCategoryDiscount(cart)).toBe(2250);
    });
});

describe('getBulkDiscount', () => {
    test('от 10 шт — 3%', () => {

        const cart = [{id: '1', title: 'Книга', price: 500, quantity: 10, category: 'books'}];

        expect(getBulkDiscount(cart)).toBe(150);
    });
    test('от 20 шт — 5%', () => {
        const cart = [{id: '1', title: 'Книга', price: 500, quantity: 20, category: 'books'}];
        expect(getBulkDiscount(cart)).toBe(500);
    });
});

describe('getTotal', () => {
    test('обычная корзина — итог равен subtotal минус скидки', () => {

        const cart = [{id: '1', title: 'Книга', price: 500, quantity: 2, category: 'books'}];

        expect(getTotal(cart)).toBe(950);
    });
    test('не уходит в минус при больших скидках', () => {
        const cart = [{id: '1', title: 'Книга', price: 1, quantity: 100, category: 'books'}];
        expect(getTotal(cart)).toBeGreaterThanOrEqual(0);
    });
});