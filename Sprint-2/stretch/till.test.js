const totalTill = require("./till.js");
const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

test("check totalTill output", () => {
  expect(totalTill(till)).toBe("£4.40");
});