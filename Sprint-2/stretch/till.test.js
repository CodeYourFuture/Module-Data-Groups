const totalTill = require("./till.js");

test("Given coins, code should be able to calculate value in Pounds", () => {
  const till = { "1p": 100, "8p": 200 };
  const answer = totalTill(till);
  expect(answer).toEqual("£17.00");
});
