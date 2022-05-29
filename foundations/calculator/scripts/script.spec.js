const calculator = require('./script')

describe('add', () =>{
    test('Add two numbers', () => {
        expect(calculator.add(2,12)).toBe(14);
    });
    test('Add two negative numbers', () => {
        expect(calculator.add(-2,-12)).toBe(-14);
    });
    test('Add a positive and a negative number', () => {
        expect(calculator.add(2,-12)).toBe(-10);
    });
});

describe('subtract', () =>{
    test('Subtract two positive numbers', () => {
        expect(calculator.subtract(2,12)).toBe(-10);
    });
    test('Subtract two negative numbers', () => {
        expect(calculator.subtract(-2,-12)).toBe(10);
    });
    test('Subtract a positive and a negative number', () => {
        expect(calculator.subtract(2,-12)).toBe(14);
    });
});

describe('multiply', () =>{
    test('Multiply two positive numbers', () => {
        expect(calculator.multiply(2,12)).toBe(24);
    });
    test('Multiply two negative numbers', () => {
        expect(calculator.multiply(-2,-12)).toBe(24);
    });
    test('Multiply a positive and a negative number', () => {
        expect(calculator.multiply(2,-12)).toBe(-24);
    });
});

describe('divide', () =>{
    test('Divide two positive numbers', () => {
        expect(calculator.divide(12,2)).toBe(6);
    });
    test('Divide two negative numbers', () => {
        expect(calculator.divide(-12,-2)).toBe(6);
    });
    test('Divide a positive and a negative number', () => {
        expect(calculator.divide(12, -2)).toBe(-6);
    });
});

describe('operate', () =>{
    test('Operate add two numbers', () => {
        expect(calculator.operate(12,2,'+')).toBe(14);
    });
    test('Operate subtract two numbers', () => {
        expect(calculator.operate(12,2,'-')).toBe(10);
    });
    test('Operate multiply two numbers', () => {
        expect(calculator.operate(12, 2, '*')).toBe(24);
    });
    test('Operate divide two numbers', ()=> {
        expect(calculator.operate(12,2,'/')).toBe(6);
    })
});
