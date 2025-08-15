const invert = require("./invert.js");

describe("edge cases for invert function", () => {
  test("given empty object return empty object", () => {
    const currentOutput = invert({});
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });
});

test("given one key-value pair", () => {
  const currentOutput = invert({ age: 6 });
  const targetOutput = { 6: "age" };
  expect(currentOutput).toEqual(targetOutput);
});

test("given non-string key-pair values", () => {
  const currentOutput = invert({
    age: 6,
    married: true,
    city: undefined,
    amount: null,
  });
  const targetOutput = {
    6: "age",
    true: "married",
    undefined: "city",
    null: "amount",
  };
  expect(currentOutput).toEqual(targetOutput);
});

test("given non-string key-pair values with spaces or special characters", () => {
  const currentOutput = invert({
    age: "1 6",
    amount: "$67%",
  });
  const targetOutput = {
    "1 6": "age",
    "$67%": "amount",
  };
  expect(currentOutput).toEqual(targetOutput);
});

test("given complex key-pair values", () => {
  const currentOutput = invert({
    age: [1, 5, 8, 6],
    amount: {
      berry: 5,
      vegs: 45,
    },
  });
  const targetOutput = {
    "1,5,8,6": "age",
    "[object Object]": "amount",
  };
  expect(currentOutput).toEqual(targetOutput);
});
