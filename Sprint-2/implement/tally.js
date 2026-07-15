function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.reduce((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1;
    return acc;
  }, {});
}

// Handle invalid cases
const INVALID_CASES = [["hello", "Input must be an array"]];

const printInvalidCases = () => {
  for (const [data, expectedMessage] of INVALID_CASES) {
    try {
      tally(data);
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
  console.log("ERROR MESSAGES");
  printInvalidCases();
  console.log("-".repeat(50));
}

module.exports = tally;
