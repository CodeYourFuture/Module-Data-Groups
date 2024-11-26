

const calculateFrequency = require('./solution');

test('calculates resulting frequency correctly', () => {
    expect(calculateFrequency([+1, -2, +3, +1])).toBe(3); 
    expect(calculateFrequency([+1, +1, +1])).toBe(3);     
    expect(calculateFrequency([+1, +1, -2])).toBe(0);     
    expect(calculateFrequency([-1, -2, -3])).toBe(-6);    
});

