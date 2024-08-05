 
 import {expect, test} from 'vitest';
 import{calculate} from './calculator.js';

 test('adds two numbers', () => {
   expect(calculate('+', 5, 2)).toBe(7);
 });

 test('subtraction of two numbers',() =>{
    expect(calculate('-', 7, 2)).toBe(5);

 });

 test('Multiply of two numbers',() =>{
    expect(calculate('*', 7, 2)).toBe(14);

 });

 test('division of two numbers',() =>{
    expect(calculate('/', 8, 2)).toBe(4);

 });



 test ('error: not a supported operator', () =>{
    expect(() => calculate('🍕', 41414, '%')).toThrow('Unsupported operator 🍕');
 });
