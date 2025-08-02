const totalTill = require("./till.js");

// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

describe("totalTill function", () => {
  test.each([
    [{ "1p": 10, "5p": 6, "50p": 4, "20p": 10 }, "£4.40"],
    [{ "2p": 5, "10p": 3, "1p": 7, "20p": 2 }, "£0.87"],
    [{ "50p": 1, "5p": 2, "1p": 3 }, "£0.63"],
    [{ "100p": 1 }, "£1.00"],
    [{ "200p": 2 }, "£4.00"],
    [{ "1p": 0, "5p": 0, "10p": 0 }, "£0.00"],
  ])("Given %j, it returns %s", (till, expected) => {
    expect(totalTill(till)).toBe(expected);
  });
});

// Given a non-object input like a string or number, etc
// when totalTill is called with this input
// then it should throw an error
describe("totalTill function", () => {
  test.each([null, "", undefined, 42, true, false, []])(
    "Given %j, it throws an error",
    (input) => {
      expect(() => totalTill(input)).toThrow("Input must be a non-null object");
    }
  );
});

// Given an object with duplicate coin keys
// When totalTill is called with this object
// Then it should return the total amount in pounds, using the last value for the duplicate key
test("Duplicate coin keys: last value wins", () => {
  const till = { "1p": 10, "1p": 5 }; // Only "1p": 5 will be kept
  expect(totalTill(till)).toBe("£0.05");
});
