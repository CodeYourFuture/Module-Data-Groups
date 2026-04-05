const till = require("./till");

test("should return total till when a till object is passed", () => {
  expect(
    till({
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    })
  ).toEqual("£4.4");
});
