const invert = require("./invert.js");


describe('invert', () => {
    test('Given an object', () => {
        expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' })
    });
    
});
