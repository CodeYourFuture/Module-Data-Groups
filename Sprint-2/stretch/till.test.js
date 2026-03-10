const totalTill = require("./till.js");

test("totals till values in pounds", () => {
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
