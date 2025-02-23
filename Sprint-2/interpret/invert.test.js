const invert = require("./invert.js");

test("", () => {
  const obj = { x: 10, y: 20 };
  const answer = invert(obj);
  expect(answer).toEqual({ 10: "x", 20: "y" });
});
test("", () => {
  const obj = { name: "Evelyn", Age: 35 };
  const answer = invert(obj);
  expect(answer).toEqual({ Evelyn: "name", 35: "Age" });
});
