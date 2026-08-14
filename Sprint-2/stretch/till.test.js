const totalTill = require("./till");

test("calculates the total value of a till in pounds", () => {
  const till = { "1p": 10, "5p": 6, "50p": 4, "20p": 10 };
  expect(totalTill(till)).toBe("£4.4");
});

test("returns £0 for an empty till", () => {
  expect(totalTill({})).toBe("£0");
});
