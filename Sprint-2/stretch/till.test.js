const totalTill = require("./till.js");
// when passed an object with key,value pairs of pence and amount of pence, returns, value of coins in pounds
test("when passed a till object, returns value of coins in pounds", () => {
  expect(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 })).toEqual(
    "£4.40"
  );
  expect(totalTill({ "1p": 15, "20p": 10 })).toEqual("£2.15");
});

// when given invalid input, throws an error
test("when given invalid input, throw an error", () => {
  expect(() => totalTill(["1p", 5, "5p", 10])).toThrow(
    new Error("Input must be an object")
  );
  expect(() => totalTill(1)).toThrow(new Error("Input must be an object"));
  expect(() => totalTill("hello")).toThrow(
    new Error("Input must be an object")
  );
});
