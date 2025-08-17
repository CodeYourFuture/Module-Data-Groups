// puzzle1.test.js
const calculateDifference = require('./puzzle1');

describe('calculateDifference', () => {
    it('should correctly calculate differences for example inputs', () => {
        // Example 1
        // sortedSet1 = [9, 8, 7, 6, 3]
        // sortedSet2 = [9, 5, 4, 3, 0]
        // Differences: |9-9| + |8-5| + |7-4| + |6-3| + |3-0| = 0 + 3 + 3 + 3 + 3 = 12
        expect(calculateDifference([3, 9, 6, 8, 7], [5, 4, 9, 3, 0])).toBe(12);

        // Example 2
        // sortedSet1 = [9, 8, 6, 2, 1]
        // sortedSet2 = [9, 5, 5, 3, 1]
        // Differences: |9-9| + |8-5| + |6-5| + |2-3| + |1-1| = 0 + 3 + 1 + 1 + 0 = 5
        expect(calculateDifference([8, 6, 2, 1, 9], [3, 1, 5, 5, 9])).toBe(5);

        // Example 3
        // sortedSet1 = [8, 6, 5, 4, 3]
        // sortedSet2 = [7, 5, 4, 3, 1]
        // Differences: |8-7| + |6-5| + |5-4| + |4-3| + |3-1| = 1 + 1 + 1 + 1 + 2 = 6
        expect(calculateDifference([4, 8, 5, 3, 6], [7, 3, 1, 4, 5])).toBe(6);
    });

    it('should throw an error for invalid input lengths', () => {
        expect(() => calculateDifference([1, 2, 3], [4, 5, 6, 7, 8])).toThrow(
            "Both sets must have exactly 5 numbers."
        );
    });
});
