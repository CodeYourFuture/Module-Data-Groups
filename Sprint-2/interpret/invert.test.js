
// invert.test.js
const invert = require('./invert.js'); 

describe('invert function', () => {
    // Test case 1: Inverting an object with a single key-value pair
    test('should invert an object with a single key-value pair', () => {
      const input = { a: 1 };
      const expectedOutput = { "1": "a" };
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 2: Inverting an object with multiple key-value pairs
    test('should invert an object with multiple key-value pairs', () => {
      const input = { a: 1, b: 2 };
      const expectedOutput = { "1": "a", "2": "b" };
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 3: Inverting an object with different data types
    test('should invert an object with numeric values as keys', () => {
      const input = { x: 10, y: 20 };
      const expectedOutput = { "10": "x", "20": "y" };
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 4: Inverting an empty object
    test('should return an empty object when given an empty object', () => {
      const input = {};
      const expectedOutput = {};
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 5: Handling objects with numeric keys and string values
    test('should invert object with numeric keys and string values', () => {
      const input = { 1: "a", 2: "b" };
      const expectedOutput = { "a": "1", "b": "2" };
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 6: Handling mixed key types (strings and numbers)
    test('should handle mixed key types correctly', () => {
      const input = { a: 1, 2: "b" };
      const expectedOutput = { "1": "a", "b": "2" };
      expect(invert(input)).toEqual(expectedOutput);
    });
  
    // Test case 7: Handling objects with non-primitive values
    test('should handle objects with non-primitive values (arrays/objects)', () => {
      const input = { a: [1, 2], b: { c: 3 } };
      const expectedOutput = {
        "[1,2]": "a",
        "[object Object]": "b",
      };
      expect(invert(input)).toEqual(expectedOutput);
    });
  });