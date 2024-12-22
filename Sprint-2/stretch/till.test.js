const totalTill = require('./till')


describe("totalTill", () => {


  test("It returns £0.0 for an empty till object", () => {
    const till = {};
    expect(totalTill(till)).toBe("£0");
  });

  test("It returns £0.0 if all quantities are 0", () => {
    const till = {
      "1p": 0,
      "5p": 0,
    };
    expect(totalTill(till)).toBe("£0");
  });

  test("It returns correct total, if the input is an object of currency and value as a key-pair ", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
    expect(totalTill(till)).toBe("£4.4");
  });

  });

  

  

  