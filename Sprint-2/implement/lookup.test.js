test("creates a lookup object from an array of country-currency pairs", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];

  const lookup = createLookup(countryCurrencyPairs);

  expect(lookup).toEqual({
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  });
});
