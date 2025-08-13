const totalTill = require("./till");

describe("totalTill", () => {
  test("calculates the total amount in pounds for a typical till", () => {
    const till = {
      "1p": 10,   // 10p
      "5p": 6,    // 30p
      "50p": 4,   // 200p
      "20p": 10,  // 200p
    };
    const result = totalTill(till);
    expect(result).toBe("£4.40");
  });

  test("returns £0 when till is empty", () => {
    const till = {};
    const result = totalTill(till);
    expect(result).toBe("£0");
  });

  test("works with only one coin type", () => {
    const till = { "2p": 50 }; // 100p = £1
    const result = totalTill(till);
    expect(result).toBe("£1");
  });

  test("does not modify the input object", () => {
    const till = { "10p": 5, "1p": 10 };
    const tillCopy = { ...till };
    totalTill(till);
    expect(till).toEqual(tillCopy);
  });
});