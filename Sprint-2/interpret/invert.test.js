const invert = require("./invert");


describe("invert function", () => {
    test("Given an object with multiple key-value pairs, it should swap the keys and values in the object", () => {
        expect(invert({ x: 10, y: 20 })).toEqual({"10": "x", "20": "y"});
    });

    test("Given an object with a single key-value pair, it should swap the key and value in the object", () => {
        expect(invert({x: 10})).toEqual({"10": "x"});
    });

    test("Given an empty object, it should return an empty object", () => {
        expect(invert({})).toEqual({});
    });

    test("When we pass a string into invert, it should throw an error", () => {
        expect(() => invert('I enjoy learning JavaScript')).toThrow('Invalid input. Input must be a plain object.');
    });

    test("When we pass duplicate values, it should throw an error", () => {
        expect(() => invert({a: 1, b: 1})).toThrow(`Duplicate value found. Cannot invert.`);
    });

    test("Given an edge case with a different data type, it should swap the keys and values of the object ", () => {
        expect(invert({ a: 1, b: '2', c: true })).toEqual({ '1': 'a', '2': 'b', true: 'c' });
    });

    test("Given an edge case with (ABCD) string, it should throw an error ", () => {
        expect(invert("ABCD")).toThrow('Invalid input. Input must be a plain object.');
    });

    test("Given an edge case of an array with only numbers, it should throw an error ", () => {
        expect(invert([1, 2, 3, 4])).toThrow('Invalid input. Input must be a plain object.');
    });
});
