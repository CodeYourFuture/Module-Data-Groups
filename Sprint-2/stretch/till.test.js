const totalTill = require('./till');

test("given an object of coins, returns the total amount in pounds", () => {
  const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
  };
  const givenInput = totalTill(till);
  const expectedOutcome = "£4.4";

  expect(givenInput).toEqual(expectedOutcome);
});

test("given an object of coins, returns the total amount in pounds", () => {
  const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
      "2p": 2
  };
  const givenInput = totalTill(till);
  const expectedOutcome = "£4.44";

  expect(givenInput).toEqual(expectedOutcome);
});

