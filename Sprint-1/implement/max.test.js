
const findMax = require("./max.js");

describe("findMax()", () => {
    // Requirement 1
    test("finds the largest number in an array", () => {
        expect(findMax([30, 50, 10, 40])).toBe(50);
    });

    // Requirement 2
    test("given an empty array, returns -Infinity", () => {
        expect(findMax([])).toBe(-Infinity);
    });

    // Requirement 3
    test("given an array with one number, returns that number", () => {
        expect(findMax([42])).toBe(42);
    });

    // Requirement 4
    test("finds the largest number in a mix of positive and negative numbers", () => {
        expect(findMax([-10, 5, 0, -2, 20])).toBe(20);
    });

    // Requirement 5
    test("given only negative numbers, returns the one closest to zero", () => {
        expect(findMax([-50, -10, -40])).toBe(-10);
    });

    // Requirement 6
    test("finds the largest among decimal numbers", () => {
        expect(findMax([1.5, 1.55, 1.05])).toBe(1.55);
    });

    // Requirement 7
    test("ignores non-numeric values and finds the max", () => {
        expect(findMax(['hey', 10, 'hi', 60, '10'])).toBe(60);
    });

    // Requirement 8
    test("given only non-number values, returns -Infinity", () => {
        expect(findMax(['apple', 'orange', ' '])).toBe(-Infinity);
    });

    test("treats numeric strings as numbers", () => {
        expect(findMax(["10", "20", "5"])).toBe(20);
    });
});


