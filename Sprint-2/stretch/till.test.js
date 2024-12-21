const totalTill = require("./till");

test("calculates the total amount in pounds from the till object", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    }
    expect(totalTill(till)).toEqual("£4.40");
  });

 