const totalTill = require("./till");

test("Should return total amnount of money in till", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  const currentOutput = totalTill(till);
  const targetOutput = "£4.40";
  expect(currentOutput).toBe(targetOutput);
});

test("Should return total amnount of money in till is less than 10p", () => {
  const till = {
    "1p": 1,
    "5p": 1,
    "50p": 0,
    "20p": 0,
  };
  const currentOutput = totalTill(till);
  const targetOutput = "£0.06";
  expect(currentOutput).toBe(targetOutput);
});

test("Should return total amnount of money in till is more than £10", () => {
  const till = {
    "1p": 15,
    "5p": 10,
    "50p": 30,
    "20p": 40,
  };
  const currentOutput = totalTill(till);
  const targetOutput = "£23.65";
  expect(currentOutput).toBe(targetOutput);
});
