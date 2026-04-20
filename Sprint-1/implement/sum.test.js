
const sum = require("./sum.js");

describe("sum()", () => {
    // Requirement 1 & 6
    test("should sum numerical elements and ignore non-numerical strings", () => {
        expect(sum([10, 20, 30])).toBe(60);
        expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
    });

    // Requirement 2
    test("given an empty array, it should return 0", () => {
        expect(sum([])).toBe(0);
    });

    // Requirement 3
    test("given an array with one number, it should return that number", () => {
        expect(sum([42])).toBe(42);
    });

    // Requirement 4
    test("given an array with negative numbers, it should return the correct total", () => {
        expect(sum([10, -5, 20])).toBe(25);
        expect(sum([-10, -20, 5])).toBe(-25);
    });

    // Requirement 5
    test("given an array with decimals, it should return the correct total", () => {
        // Using toBeCloseTo for float precision safety
        expect(sum([1.5, 2.5, 1.1])).toBeCloseTo(5.1);
    });

    // Requirement 7
    test("given an array with only non-number values, it should return 0", () => {
        expect(sum(['apple', 'banana', null, undefined])).toBe(0);
    });

    test("should handle numeric strings correctly", () => {
        expect(sum(["10", "20", 5])).toBe(35);
    });
});

