const test = require("node:test");
const assert = require("node:assert/strict");
const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];

  assert.deepEqual(createLookup(input), {
    US: "USD",
    CA: "CAD",
  });
});

test("returns an empty object when given an empty array", () => {
  assert.deepEqual(createLookup([]), {});
});

test("creates a lookup object for a single code pair", () => {
  assert.deepEqual(createLookup([["ZA", "ZAR"]]), {
    ZA: "ZAR",
  });
});