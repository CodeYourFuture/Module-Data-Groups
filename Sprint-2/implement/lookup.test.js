const createLookup = require("./lookup.js");

/*
Implement a function called createLookup that turns an array of
country-currency code pairs into an object.
*/

// Test 1: multiple pairs
test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const expected = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };
  expect(createLookup(input)).toEqual(expected);
});

// Test 2: empty array should return empty object
test("returns empty object when given an empty array", () => {
  const input = [];
  const expected = {};
  expect(createLookup(input)).toEqual(expected);
});

// Test 3: single pair
test("works with a single country-currency pair", () => {
  const input = [["JP", "JPY"]];
  const expected = { JP: "JPY" };
  expect(createLookup(input)).toEqual(expected);
});

// Test 4: duplicate keys (last one wins)
test("handles duplicate country codes (last value wins)", () => {
  const input = [
    ["US", "USD"],
    ["US", "USN"],
  ];
  const expected = { US: "USN" }; // last one overwrites
  expect(createLookup(input)).toEqual(expected);
});
