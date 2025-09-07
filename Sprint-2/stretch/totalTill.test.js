const totalTill = require("./till.js");

test("calculates total amount in pounds from till object", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe("£4.4");
});

test("returns £0 when till is empty", () => {
  expect(totalTill({})).toBe("£0");
});
test("handles large quantities correctly", () => {
  const till = {
    "1p": 1000,
    "5p": 200,
    "50p": 50,
    "20p": 25,
  };

  expect(totalTill(till)).toBe("£50");
});