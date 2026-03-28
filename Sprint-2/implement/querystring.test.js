const parseQueryString = require("./querystring.js");

describe("parseQueryString", () => {
  // Case 1: Returns an empty object when given an empty query string
  test("parses an empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
  });

  // Case 2: String contains one key-value pair and 1 '=' character
  test("parses querystring values containing =", () => {
    const singlePair = [
      ["name=John", { name: "John" }],
      ["age=30", { age: "30" }],
      ["city=New York", { city: "New York" }],
    ];

    singlePair.forEach(([input, targetOutput]) => {
      expect(parseQueryString(input)).toEqual(targetOutput);
    });
  });

  // Case 3: String contains one key-value pair and multiple '=' character
  test("parses querystring values containing multiple =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });
});
