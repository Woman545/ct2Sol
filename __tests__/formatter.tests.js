const {formatPrice, pluralizeItems} = require('../src/formatter')

describe('formatPrice', () => {
    test('форматирует число с копейками', () => {

        expect(formatPrice(1234.5)).toBe('1 234,50 ₽');
    });
    test('бросает ошибку для не-числа', () => {
        expect(() => formatPrice('100')).toThrow('Amount must be a number');
    });
});

describe('pluralizeItems', () => {
    test('1 товар', () => {

        expect(pluralizeItems(1)).toBe('1 товар');
    });
    test('3 товара', () => {
        expect(pluralizeItems(3)).toBe('3 товара');
    });
    test('11 товаров', () => {
        expect(pluralizeItems(11)).toBe('11 товаров');
    });
});