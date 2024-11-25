// till.test.js

const totalTill = require('./till');  // Adjust the path if necessary

describe("totalTill()", () => {
  test("calculates the total amount of coins in pounds", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };

    expect(totalTill(till)).toEqual("£4.40");
  });

  test("returns £0.00 for an empty till", () => {
    const emptyTill = {};
    expect(totalTill(emptyTill)).toEqual("£0.00");
  });

  test("handles non-numeric coin values gracefully", () => {
    const invalidTill = {
      "1p": 10,
      "five": 6,  // Invalid coin value
      "50p": 4,
    };

    expect(totalTill(invalidTill)).toEqual("£4.10"); // Should ignore "five" and calculate correctly for the others
  });
});

