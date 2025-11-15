const invert = require("./invert.js");

test("Given an empty object, return an empty object", () => {
    expect(invert({})).toEqual({});
})

