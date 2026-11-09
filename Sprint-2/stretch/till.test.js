const totalTill = require("./till.js");

test("totals a till in pounds", () => {
  expect(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 })).toBe("£4.4");
});

test("handles an empty till and different quantities", () => {
  expect(totalTill({})).toBe("£0");
  expect(totalTill({ "2p": 3, "10p": 2 })).toBe("£0.26");
});
