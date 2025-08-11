const invert = require("./invert");

test("invert single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("invert multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});
