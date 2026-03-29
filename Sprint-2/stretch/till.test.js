const totalTill = require("./till");

test("returns correct total for sample till", () => {
  const till = { "1p": 10, "5p": 6, "50p": 4, "20p": 10 };
  expect(totalTill(till)).toBe("£4.40");
});

test("returns £0.00 for empty till", () => {
  expect(totalTill({})).toBe("£0.00");
});
