const totalTill = require("./till.js");

describe("edge cases for till function", () => {
  test("given empty object", () => {
    const currentOutput = totalTill({});
    const targetOutput = "£0.00";
    expect(currentOutput).toEqual(targetOutput);
  });
});

test("given empty object", () => {
  const currentOutput = totalTill({ "£0.1": 1, "0.20p": 10 });
  const targetOutput = "£0.12";
  expect(currentOutput).toEqual(targetOutput);
});

test("given number as input throw an error", () => {
  expect(() => totalTill(1233)).toThrow("The input is not a valid object");
});

test("given input with 0-quantities as input", () => {
  const currentOutput = totalTill({ "1p": 0, "20p": 0 });
  const targetOutput = "£0.00";
  expect(currentOutput).toEqual(targetOutput);
});

test("given null as input throw an error", () => {
  expect(() => totalTill(null)).toThrow("The input is not a valid object");
});

test("given null as input throw an error", () => {
  expect(() => totalTill(["1p", 10, "20p", 9])).toThrow(
    "The input is not a valid object"
  );
});
