const createLookup = require("./lookup.js");

describe("createLookup", () => {
  // Case 1: Returns an empty object if no country-currency pairs are provided
  test("returns an empty object if no country-currency pairs are provided", () => {
    const countryCurrencyPairs = [];
    const currencyObj = createLookup(countryCurrencyPairs);

    expect(currencyObj).toEqual({});
  });

  // Case 2: Returns country currency code lookup for a single country-currency pair
  test("creates a country currency code lookup for a single code pair", () => {
    const countryCurrencyPairs = [["US", "USD"]];
    const currencyObj = createLookup(countryCurrencyPairs);

    expect(currencyObj).toEqual({
      US: "USD",
    });
  });

  // Case 3: Returns country currency codes lookup for multiple country-currency pairs
  test("creates a country currency code lookup for multiple codes", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
      ["ZA", "ZAR"],
      ["NG", "NGN"],
    ];

    const inputCurrencyPairObj = createLookup(countryCurrencyPairs);
    const outputCurrencyPairObj = {
      US: "USD",
      CA: "CAD",
      GB: "GBP",
      ZA: "ZAR",
      NG: "NGN",
    };

    expect(inputCurrencyPairObj).toEqual(outputCurrencyPairObj);
  });

  // Case 4: Throws an error if a country-currency pair is not an array
  test("throws an error if a country-currency pair is not an array", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      "GB-GBP",
      ["ZA", "ZAR"],
      ["NG", "NGN"],
    ];

    expect(() => createLookup(countryCurrencyPairs)).toThrow(
      "Country-currency pairs must be in array format"
    );
  });

  // Case 5: Throws an error if a country-currency pair is missing a country or currency
  test("throws an error if a country-currency pair is missing a country or currency", () => {
    const countryCurrencyPairs = [
      ["US", ""],
      ["", "CAD"],
      ["  ", "GBP"],
    ];

    for (const currencyPair of countryCurrencyPairs) {
      expect(() => createLookup([currencyPair])).toThrow(
        "Country and currency codes cannot be empty"
      );
    }
  });

  // Case 6: Throws an error if a country-currency pair contains more than two elements
  test("throws an error if a country-currency pair contains more than two elements", () => {
    const countryCurrencyPairs = [["GB", "GBP", "ZAR"]];

    expect(() => createLookup(countryCurrencyPairs)).toThrow(
      "Country-currency pairs must contain exactly two elements: country and currency"
    );
  });

  // Case 7: Throws and error if a country-currency pair is duplicated
  test("throws an error if a country-currency pair is duplicated", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["US", "USD"],
    ];

    expect(() => createLookup(countryCurrencyPairs)).toThrow(
      "Duplicate country code found: US"
    );
  });

  // Case 8: Throws an error if non-string values are used as country or currency codes
  test("throws an error if non-string values are used as country or currency codes", () => {
    const countryCurrencyPairs = [
      [{ name: "United States" }, "USD"],
      ["CA", Infinity],
      ["GB", 1.21],
      [undefined, "ZAR"],
      ["NG", null],
    ];

    for (const currencyPair of countryCurrencyPairs) {
      expect(() => createLookup([currencyPair])).toThrow(
        "Country-currency pairs must be in string format"
      );
    }
  });
});
