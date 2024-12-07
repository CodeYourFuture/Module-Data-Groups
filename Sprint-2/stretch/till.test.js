const totalTill=require('./till')
test("totalTill calculates the correct total amount in pounds", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
  
    const result = totalTill(till);
    expect(result).toBe("£4.40");
  });
  