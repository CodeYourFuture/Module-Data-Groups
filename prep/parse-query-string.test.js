const parseQueryString = require('./parse-query-string')

test("given a query string with no query parameters, returns an empty object", function() {
  const input = "";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});

describe("parseQueryString()", () => {
  test("given a queryString with no query parameters, returns an empty object", function() {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });
  test("given a queryString with one pair of query params, returns them in object form", function() {
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };

    expect(currentOutput).toEqual(targetOutput);
  });
  test("given a query string with multiple key-value pairs, returns them in object form", function() {
    const input = "sort=lowest&colour=yellow";
    const currentOutput = parseQueryString(input);
    const targetOutput = { sort: "lowest", colour: "yellow" };
  
    expect(currentOutput).toEqual(targetOutput);
  });
});