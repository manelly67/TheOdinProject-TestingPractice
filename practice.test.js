import { capitalize } from './practice';
import { reverseString } from './practice';
import { Calculator } from './practice';
import { caesarCipher } from './practice';
import { analyzeArray } from './practice'; 


test('file should exist', () => {
  expect(require('./practice')).toBeDefined();
  });

test('should exist', () => {
    expect(capitalize).toBeDefined();
    expect(reverseString).toBeDefined();
    expect(Calculator).toBeDefined();
    expect(caesarCipher).toBeDefined();
    expect(analyzeArray).toBeDefined();
  });

test('first character capitalized', () => {
    expect(capitalize('prueba')).toBe('Prueba');
    expect(capitalize('la prueba')).toBe('La prueba');
    expect(capitalize(123)).toBe('123');
  });

test('returns the string reversed', () => {
    expect(reverseString('prueba')).toBe('abeurp');
    expect(reverseString('Nu evA')).toBe('Ave uN');
    expect(reverseString('')).toBe('');
    expect(reverseString(123)).toBe('321');
  });

let calculator = new Calculator();
test('correct calculation', () => {
  expect(calculator.add(1,6)).toBe(7);
  expect(calculator.subtract(1,6)).toBe(-5);
  expect(calculator.divide(1,6)).toBeCloseTo(0.1667);
  expect(calculator.multiply(1,6)).toBe(6);
  expect(calculator.add('a','b')).toBeNull();
  expect(calculator.subtract('a','b')).toBeNull();
  expect(calculator.divide('a','b')).toBeNull();
  expect(calculator.multiply('a','b')).toBeNull();
});

test('returns each character shifted with cypher',()=> {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('xyZ?', 6)).toBe('deF?');
  expect(caesarCipher('xyZ?', 6.5)).toBeNull();
});

test('returns properties: average, min, max, and length',()=> {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6  });
  expect(analyzeArray([1,'a',3,'b',2,6])).toBeNull();
});

