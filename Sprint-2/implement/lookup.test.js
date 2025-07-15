const createLookup = require("./lookup");

test("creates lookup from country-currency pairs", () => {
  expect(createLookup([['US', 'USD'], ['CA', 'CAD']])).toEqual({
    US: 'USD',
    CA: 'CAD',
  });
});

test("returns empty object for empty input", () => {
  expect(createLookup([])).toEqual({});
});

test("handles multiple entries", () => {
  const input = [['US', 'USD'], ['GB', 'GBP'], ['JP', 'JPY']];
  expect(createLookup(input)).toEqual({
    US: 'USD',
    GB: 'GBP',
    JP: 'JPY',
  });
});
