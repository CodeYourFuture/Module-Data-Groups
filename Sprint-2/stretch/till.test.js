const totalTill = require("./till.js");

// writing tests:

test("calculates total correctly for a standard till", () => {
  const till = { "1p": 10, "5p": 6, "50p": 4, "20p": 10 };
  expect(totalTill(till)).toBe("£4.40");
});

test("returns £0.00 when all coins are 0", () => {
  const till = { "1p": 0, "2p": 0, "50p": 0 };
  expect(totalTill(till)).toBe("£0.00");
});

test("calculates correctly with only a few coins", () => {
  const till = { "1p": 100, "50p": 2 };
  expect(totalTill(till)).toBe("£2.00");
});

test("works with a mix of coins", () => {
  const till = { "5p": 4, "10p": 5, "20p": 2 };
  expect(totalTill(till)).toBe("£1.10"); // correct calculation
});
