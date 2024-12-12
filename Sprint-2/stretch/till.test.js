
const totalTill = require("./till.js");

test("Calculates total till amount", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  const expectedTotal = "£2.90";
  const actualTotal = totalTill(till);

  expect(actualTotal).toBe(expectedTotal);
});