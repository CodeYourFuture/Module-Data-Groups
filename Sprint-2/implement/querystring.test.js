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

    expect(parseQueryString("equation1=x=y+1&equation2=a=b+c")).toEqual({
      equation1: "x=y+1",
      equation2: "a=b+c",
    });
  });
});
