const totalTill = require("./till");

test("Given a non object, it should throw error message", () => {
  const errorMessage = "Input should be an object";
  expect(() => totalTill([])).toThrow(errorMessage);
  expect(() => totalTill(123)).toThrow(errorMessage);
  expect(() => totalTill("123")).toThrow(errorMessage);
  expect(() => totalTill(null)).toThrow(errorMessage);
  expect(() => totalTill(undefined)).toThrow(errorMessage);
  expect(() => totalTill(true)).toThrow(errorMessage);
});

test("Given an empty object, it should return £0.00", () => {
  expect(totalTill({})).toBe("£0.00");
});

test("Given a pence object, it should return value of pound", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  expect(totalTill(till)).toBe("£4.40");
});

test("Given a large amount of pence object, it should return proper value of pound", () => {
  const till = {
    "1p": 1234,
    "5p": 567,
    "50p": 890,
    "20p": 1011,
  };
  expect(totalTill(till)).toBe("£687.89");
});

test("Given a pence object mixed with something else, it should ignore invalid input and return the value of pound", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    fakeCoin: 10,
    undefined: 1,
    null: 2,
    "50p": 4,
    "20p": 10,
  };
  expect(totalTill(till)).toBe("£4.40");
});
