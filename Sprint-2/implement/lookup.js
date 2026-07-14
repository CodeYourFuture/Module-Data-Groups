function createLookup(data) {
  validateData(data);
  return data.reduce((lookup, [country, currency]) => {
    lookup[country] = currency;
    return lookup;
  }, {});
}

// check for valid pairs
const isValidPair = (value) =>
  Array.isArray(value) &&
  value.length === 2 &&
  typeof value[0] === "string" &&
  typeof value[1] === "string";

// check for duplicates
const normaliseDataPair = ([country, currency]) => `${country}|${currency}`;
const isDuplicated = (data) =>
  new Set(data.map(normaliseDataPair)).size !== data.length;

const validateData = (data) => {
  // check that it is an array
  if (!Array.isArray(data)) {
    throw new Error("Input must be an array");
  }
  // check that input is not empty
  if (data.length === 0) {
    throw new Error("Input must not be empty");
  }

  // check that the values are valid
  if (data.some((value) => !isValidPair(value))) {
    throw new Error("Input must be valid text pairs");
  }

  // check for duplicates
  if (isDuplicated(data)) {
    throw new Error("Input must not be duplicated");
  }

  // check country code has 2 uppercase letters
  if (data.some(([country]) => !/^[A-Z]{2}$/.test(country))) {
    throw new Error("Country code must be 2 uppercase letters");
  }
  // check currency code has 3 uppercase letters
  if (data.some(([, currency]) => !/^[A-Z]{3}$/.test(currency))) {
    throw new Error("Currency code must be 3 uppercase letters");
  }
};

// Handle invalid cases
const INVALID_CASES = [
  [[], "Input must not be empty"],
  ["hello", "Input must be an array"],
  [[1, 2, 3], "Input must be valid text pairs"],
  [
    [
      ["US", "USD"],
      ["US", "USD"],
    ],
    "Input must not be duplicated",
  ],
];

const printInvalidCases = () => {
  for (const [data, expectedMessage] of INVALID_CASES) {
    try {
      createLookup(data);
      console.log(`Unexpected success for ${JSON.stringify(data)}`);
    } catch (error) {
      console.log("-".repeat(50));
      console.log(
        `Data: ${JSON.stringify(data)}\nExpected: ${expectedMessage}\nReceived: ${error.message}`
      );
    }
  }
};

if (require.main === module) {
  console.log("DATA ERRORS");
  printInvalidCases();
  console.log("-".repeat(50));
}
module.exports = createLookup;
