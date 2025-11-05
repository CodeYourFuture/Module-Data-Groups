const parseQueryString = require("./querystring.js");

// Test 1: normal key=value pairs
test("parses simple query string", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
});

// Test 2: value contains '='
test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({ equation: "x=y+1" });
});

// Test 3: empty string returns empty object
test("returns empty object for empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Test 4: key without value
test("parses key without value as empty string", () => {
  expect(parseQueryString("keyWithoutValue")).toEqual({ keyWithoutValue: "" });
});

// Test 5: multiple keys including empty value
test("parses multiple keys including empty values", () => {
  expect(parseQueryString("a=1&b=&c=3")).toEqual({ a: "1", b: "", c: "3" });
});

// Test 6: only & characters with empty keys
test("handles consecutive & correctly", () => {
  expect(parseQueryString("a=1&&b=2")).toEqual({ a: "1", b: "2", "": "" });
});
