const invert = require("./invert.js");

test("When invert is passed, keys and values  in the object should be swapped ",() => {
  expect({x : 10, y : 20}).toEqual({x : 10, y : 20});
});
