const totalTill = require("./till.js");

describe("totalTill()", () => {
  test("correctly totals a simple till", () => {
    const till = {
      "1p": 10,    // 10p
      "5p": 6,     // 30p
      "20p": 10,   // 200p
      "50p": 4,    // 200p
    };
   
    expect(totalTill(till)).toBe("£4.40");
  });

  test("ignores invalid coin types", () => {
    const till = {
      "1p": 2,     // 2p
      "abc": 10,  // ignore
      "£1": 5,     
    };

    expect(totalTill(till)).toEqual("£0.02");
  });

  test("handles empty till", () => {
    expect(totalTill({})).toEqual("£0.00");
  });

  test("throws an error for non-object input", () => {
    expect(() => totalTill(null)).toThrow("Input should be an object");
    expect(() => totalTill(5)).toThrow("Input should be an object");
    expect(() => totalTill("hello")).toThrow("Input should be an object");
    expect(() => totalTill([])).toThrow("Input should be an object");
  });

  test("correct formatting for values under 10p", () => {
    const till = { "1p": 3 }; // 3p
    expect(totalTill(till)).toEqual("£0.03");
  });

  test("correct formatting when total is exactly whole pounds", () => {
    const till = { "50p": 4, "20p": 5 }; 
    // 50p*4 = 200p, 20p*5 = 100p → total = 300p = £3.00

    expect(totalTill(till)).toEqual("£3.00");
  });
});

// In till.test.js test cases written and tested. 