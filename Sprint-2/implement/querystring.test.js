const parseQueryString = require("./querystring.js");

describe("parseQueryString", () => {
  // Case 1: Returns an empty object when given an empty query string
  test("parses an empty querystring", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString("  ")).toEqual({});
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

  // Case 4: String contains multiple key-value pairs separated by '&' with one '=' character each
  test("parses multiple key-value pairs", () => {
    const multiplePairs = [
      ["name=John&age=30", { name: "John", age: "30" }],
      ["city=New York&country=USA", { city: "New York", country: "USA" }],
      [
        "key1=value1&key2=value2&key3=value3",
        { key1: "value1", key2: "value2", key3: "value3" },
      ],
      [
        "Nicaragua=Managua&Honduras=Tegucigalpa&El Salvador=San Salvador&Costa Rica=San José",
        {
          Nicaragua: "Managua",
          Honduras: "Tegucigalpa",
          "El Salvador": "San Salvador",
          "Costa Rica": "San José",
        },
      ],
    ];

    multiplePairs.forEach(([input, targetOutput]) => {
      expect(parseQueryString(input)).toEqual(targetOutput);
    });
  });

  // Case 5: String contains multiple key-value pairs separated by '&' with multiple '=' character each
  test("parses multiple key-value pairs with multiple =", () => {
    const multiplePairsWithEquals = [
      [
        "equation1=x=y+1&equation2=a=b+c",
        {
          equation1: "x=y+1",
          equation2: "a=b+c",
        },
      ],
      [
        "equation2=a!=b+c&equation3=p=q*r",
        {
          equation2: "a!=b+c",
          equation3: "p=q*r",
        },
      ],
      [
        "equation3=p!=q*r&equation4=m=n+o&equation5=x=y/1",
        {
          equation3: "p!=q*r",
          equation4: "m=n+o",
          equation5: "x=y/1",
        },
      ],
    ];

    multiplePairsWithEquals.forEach(([input, targetOutput]) => {
      expect(parseQueryString(input)).toEqual(targetOutput);
    });
  });

  // Case 6: Throws an error when given an invalid input like a non-string
  test("throws an error when passed a non-string input", () => {
    const invalidInputs = [
      [123, -67, 3.14],
      { name: "John Locke" },
      { title: "Lost" },
      {},
      null,
      undefined,
      [
        [
          "equation1=x=y+1&equation2=a=b+c",
          {
            equation1: "x=y+1",
          },
        ],
      ],
    ];

    invalidInputs.forEach((input) => {
      expect(() => parseQueryString(input)).toThrow("Input must be a string");
    });
  });

  // Case 7: String contains a space between the key and value
  test("parses querystring with spaces between key and value", () => {
    const pairsWithSpaces = [
      ["name =John Doe", { name: "John Doe" }],
      ["city = New York", { city: "New York" }],
      ["country  =United States", { country: "United States" }],
    ];

    pairsWithSpaces.forEach(([input, targetOutput]) => {
      expect(parseQueryString(input)).toEqual(targetOutput);
    });
  });

  // Case 8: Throws an error when given a string with missing key or value
  test("throws an error when passed a string with missing key or value", () => {
    const invalidQueryStrings = [
      "=valueOnly",
      "keyOnly=",
      "=valueOnly&key2=value2",
      "key1=value1&=valueOnly",
    ];

    invalidQueryStrings.forEach((input) => {
      expect(() => parseQueryString(input)).toThrow(
        "String must contain both a key and a value separated by '='"
      );
    });
  });
});
