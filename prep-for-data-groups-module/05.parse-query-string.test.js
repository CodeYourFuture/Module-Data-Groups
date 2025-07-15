const parseQueryString = require('./04.single-query-string')

describe("parseQueryString()", () => {
  // test 1
  test("when parse query string is called with empty strings, return empty object", () => {
    const input = "";
    const currentOutPut = parseQueryString(input);
    const targetOutput = {};
    expect(currentOutPut).toEqual(targetOutput);
  });
// test 2
  test.only("given a query string with one pair of query params, returns them in object form", () => {
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };
    expect(currentOutput).toStrictEqual(targetOutput);
  });
  // test 3:
  test("given a query string with multiple key-value pairs, returns them in object form", () => {
    const input = "sort=lowest&color=yellow";
    const currentOutPut = parseQueryString(input);
    const targetOutput = { sort: "lowest", colour: "yellow" };
    expect(currentOutput).toEqual(targetOutput);
  });
});

// the reason we use .toStrictEqual is because we want to check that the key value pairs are the same.
//.only will test only the test block that we added .only to
