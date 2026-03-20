const totalTill = require("./till.js");

test("returns the total amount in pounds for a till object", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toEqual("£4.40");
});
