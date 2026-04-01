const totalTill = require("./till.js");

describe("totalTill", () => {
  test("returns the total amount in pounds for a given till object", () => {
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

  test("handles tills with only one type of coin", () => {
    const singleCoinTill = {
      "10p": 5,
    };

    expect(totalTill(singleCoinTill)).toEqual("£0.50");
  });
});
