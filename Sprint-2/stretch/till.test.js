const totalTill = require("./till");

describe("totalTill", () => {
  it("returns the correct total for a standard till", () => {
    const till = {
      "1p": 10,    
      "5p": 6,     
      "50p": 4,   
      "20p": 10    
    };
    expect(totalTill(till)).toBe("£4.40");
  });

  it("returns £0.00 for an empty till", () => {
    expect(totalTill({})).toBe("£0.00");
  });

  it("handles a till with only one coin type", () => {
    expect(totalTill({ "2p": 50 })).toBe("£1.00");
  });
});
