// till.test.js
const totalTill = require('./till'); // Import the totalTill function

describe('totalTill function', () => {

  test('should return the correct total amount for a given till', () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
    const result = totalTill(till);
    expect(result).toBe('£2.70'); // 10*1 + 6*5 + 4*50 + 10*20 = 270p = £2.70
  });

  test('should return £0.00 when the till is empty', () => {
    const till = {};
    const result = totalTill(till);
    expect(result).toBe('£0.00');
  });

  test('should handle only one type of coin correctly', () => {
    const till = {
      "1p": 100,
    };
    const result = totalTill(till);
    expect(result).toBe('£1.00');
  });

  test('should handle multiple of the same coin type', () => {
    const till = {
      "10p": 15,
    };
    const result = totalTill(till);
    expect(result).toBe('£1.50');
  });

  test('should handle coins with higher values', () => {
    const till = {
      "100p": 3, // £3
    };
    const result = totalTill(till);
    expect(result).toBe('£3.00');
  });

  test('should return 0 if all quantities are 0', () => {
    const till = {
      "1p": 0,
      "5p": 0,
      "50p": 0,
      "20p": 0,
    };
    const result = totalTill(till);
    expect(result).toBe('£0.00');
  });

});
