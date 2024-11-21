let invert_test = require("./invert.js");

test("testing invert", () => {
    expect(invert_test({a : 1, b: 2, c : 3})).toEqual({1:"a", 2:"b", 3:"c"});
  })

  test("testing invert 2", () => {
    expect(invert_test({a : 1, b: 2, c : 3, d: 55, f:22})).toEqual({1:"a", 2:"b", 3:"c", 55:"d", 22:"f"});
  })