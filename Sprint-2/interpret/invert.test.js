const invert = require("./invert.js");

test("inverts a single key value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
});