const path = require('path');

const { calculateFrequency, readInputFile } = require('./solution');

describe('Day 1: Chronal Calibration', () => {
  test('calculates resulting frequency correctly for sample inputs', () => {
    expect(calculateFrequency([+1, -2, +3, +1])).toBe(3);
    expect(calculateFrequency([+1, +1, +1])).toBe(3);
    expect(calculateFrequency([+1, +1, -2])).toBe(0);
    expect(calculateFrequency([-1, -2, -3])).toBe(-6);
  });

  test('calculates resulting frequency from input.txt file', () => {
 
    const inputFile = 'input.txt'

    const frequencyChanges = readInputFile(inputFile);

    const result = calculateFrequency(frequencyChanges);

    console.log('Calculated frequency from input.txt:', result);

    expect(result).toBe(529);
  });
});

