const totalTill = require("./till.js");

test("calculates the total amount in the till", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  const totalAmount = totalTill(till);

  expect(totalAmount).toBe("£4.40");
});
