const totalTill = require("./till.js");

describe("totalTill", () => {
  test("calculates total correctly", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
    expect(totalTill(till)).toBe("£4.40");
  });

  test("handles empty till", () => {
    expect(totalTill({})).toBe("£0.00"); // now passes
  });

  test("handles single coin type", () => {
    expect(totalTill({ "100p": 3 })).toBe("£3.00");
  });
});
