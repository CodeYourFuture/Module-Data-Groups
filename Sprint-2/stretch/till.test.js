const totalTill = require("./till.js");

test("calculates the total amount in the till", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe("£4.40");
});

test("returns £0.00 for an empty till", () => {
  expect(totalTill({})).toBe("£0.00");
});

test("handles a till with one type of coin", () => {
  const till = { "100p": 2 };
  expect(totalTill(till)).toBe("£2.00");
});
