const invert = require('./invert');

  test('should return an object', () => { 
    const input = { a: 1 };
    expect(typeof invert(input)).toBe('object');
   })

  test('should invert an object with a single key-value pair', () => {
    const input = { a: 1 };
    const expectedOutput = { '1': 'a' };
    expect(invert(input)).toEqual(expectedOutput);
  });

  test('should invert an object with multiple key-value pairs', () => {
    const input = { a: 1, b: 2 };
    const expectedOutput = { '1': 'a', '2': 'b' };
    expect(invert(input)).toEqual(expectedOutput);
  });

// Additional test cases
  test('should handle empty object', () => {
    const input = {};
    const expectedOutput = {};
    expect(invert(input)).toEqual(expectedOutput);
  });

  test('should handle non-string values', () => {
    const input = { x: 10, y: 20 };
    const expectedOutput = { '10': 'x', '20': 'y' };
    expect(invert(input)).toEqual(expectedOutput);
  });

  test('should handle duplicate values by overwriting', () => {
    const input = { a: 1, b: 1 };
    const expectedOutput = { '1': 'b' }; // 'b' overwrites 'a'
    expect(invert(input)).toEqual(expectedOutput);
  });   
  //invalid input
  test('should throw an error for non-object input', () => {
    expect(() => invert(null)).toThrowError('Input must be an object');
    expect(() => invert(42)).toThrowError('Input must be an object');
    expect(() => invert("string")).toThrowError('Input must be an object');
    expect(() => invert([1, 2, 3])).toThrowError('Input must be an object');
  });

//   test('should handle object with non-string keys and values', () => {
//     const input = { 1: 'one', 2: 'two' };
//     const expectedOutput = { 'one': '1', 'two': '2' };
//     expect(invert(input)).toEqual(expectedOutput);
//   });

//   test('should handle object with boolean values', () => {
//     const input = { a: true, b: false };
//     const expectedOutput = { 'true': 'a', 'false': 'b' };
//     expect(invert(input)).toEqual(expectedOutput);
//   });

//   test('should handle object with mixed value types', () => {
//     const input = { a: 1, b: 'two', c: true };
//     const expectedOutput = { '1': 'a', 'two': 'b', 'true': 'c' };
//     expect(invert(input)).toEqual(expectedOutput);
//   });

//   test('should handle object with nested objects as values', () => {