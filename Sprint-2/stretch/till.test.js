const totalTill = require("./till.js");

describe("totalTill", () => {
  test("calculates the total amount in pounds for a given till object", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };

    const expected = "£4.40";
    const result = totalTill(till);

    expect(result).toBe(expected);
  });

  test("returns £0.00 for an empty till object", () => {
    const till = {};
    const expected = "£0.00";
    const result = totalTill(till);

    expect(result).toBe(expected);
  });

  test("handles a till with only one type of coin", () => {
    const till = {
      "50p": 3,
    };

    const expected = "£1.50";
    const result = totalTill(till);

    expect(result).toBe(expected);
  });

  test("handles a till with zero quantities for all coins", () => {
    const till = {
      "1p": 0,
      "5p": 0,
      "10p": 0,
      "50p": 0,
    };

    const expected = "£0.00";
    const result = totalTill(till);

    expect(result).toBe(expected);
  });
});
