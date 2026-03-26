
const invert=require('./invert')

test("should swap the keys and values in the object", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("should swap the keys and values in the object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("should swap the keys and values in the object", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
