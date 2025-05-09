const totalTill = require("./till");

test("totalTill calculates the correct total for a till object", () => {
  const testTill = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  const result = totalTill(testTill); // Call the function with test data
  expect(result).toBe("£4.4"); // Check if the result is as expected
});

test("totalTill calculates the correct total with other values", () => {
  const testTill = {
    "2p": 5,
    "10p": 3,
    "1p": 10,
  };
  const result = totalTill(testTill);
  expect(result).toBe("£0.5");
});
