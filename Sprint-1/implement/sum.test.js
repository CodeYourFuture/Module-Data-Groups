const sum = require("./sum.js");

describe("sum", () => {
    test("given an empty array, returns 0", () => {
        expect(sum([])).toBe(0);
    });

    test("given an array with just one number, returns that number", () => {
        expect(sum([5])).toBe(5);
    });

    test("given an array containing negative numbers, returns the correct sum", () => {
        expect(sum([10, -20, 30])).toBe(20);
    });

    test("given an array with decimal/float numbers, returns the correct sum", () => {
        expect(sum([1.5, 2.5, 3])).toBe(7);
    });

    test("given an array containing non-number values, ignores them and sums only the numbers", () => {
        expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
    });

    test("given an array with only non-number values, returns 0", () => {
        expect(sum(['hello', true, null, undefined, 'world'])).toBe(0);
    });

    test("throws an error if the input is not an array", () => {
        expect(() => sum(null)).toThrow("Input must be an array");
        expect(() => sum(123)).toThrow("Input must be an array");
        expect(() => sum("string")).toThrow("Input must be an array");
    });
});
