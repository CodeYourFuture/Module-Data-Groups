const totalTill = require("./till");

test("Returns £0.00 for an empty till", () => {
  const till = {};
  expect(totalTill(till)).toBe("£0.00");
});

test("Calculates total till amount", () => {
  const till = {
    "1p": 10, // 10 coins of 1p = 10p
    "5p": 6, // 6 coins of 5p = 30p
    "50p": 4, // 4 coins of 50p = 200p
    "20p": 10, // 10 coins of 20p = 200p
  };

  const expectedTotal = "£4.40";
  const actualTotal = totalTill(till);
  expect(actualTotal).toBe(expectedTotal);
});
