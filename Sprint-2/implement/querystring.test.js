const test = require("node:test");
const assert = require("node:assert/strict");
const parseQueryString = require("./querystring.js");

test("returns an empty object for an empty query string", () => {
  assert.deepEqual(parseQueryString(""), {});
});

test("parses a single key-value pair", () => {
  assert.deepEqual(parseQueryString("foo=bar"), {
    foo: "bar",
  });
});

test("parses multiple key-value pairs separated by ampersands", () => {
  assert.deepEqual(parseQueryString("a=1&b=2&c=hello"), {
    a: "1",
    b: "2",
    c: "hello",
  });
});