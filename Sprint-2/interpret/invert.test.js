test.todo("check if invert function swaps keys and values");
test("check if invert function swaps keys and values", () => {
  const invert = require("./invert");

  expect(invert({ a: 1 })).toEqual({ '1': 'a' });
  expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
  expect(invert({ x: 10, y: 20 })).toEqual({ '10': 'x', '20': 'y' });
  expect(invert({})).toEqual({});
});