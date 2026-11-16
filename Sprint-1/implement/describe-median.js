// Don't change this function.
function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  const sorted = [...list].sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
  return sorted[middleIndex];
}

// Implement this function. See describe-median.test.js for the acceptance criteria.
function describeMedian(list) {
  try {
    const median = calculateMedian(list);
    return `The median is ${median}`;
  } catch (error) {
    return `Could not calculate a median: ${error.message}`;
  }
}

module.exports = describeMedian;
```[cite: 11]

---

### 2. `Sprint-1/implement/describe-median.test.js`
```javascript
const describeMedian = require("./describe-median.js");

describe("describeMedian", () => {
  test('given [1, 2, 3], returns "The median is 2"', () => {
    expect(describeMedian([1, 2, 3])).toBe("The median is 2");
  });

  test("given an empty array, returns an explanation using the error message", () => {
    expect(describeMedian([])).toBe(
      "Could not calculate a median: calculateMedian requires a non-empty array"
    );
  });

  test("given something that isn't an array of numbers, returns an explanation using the error message", () => {
    expect(describeMedian("banana")).toBe(
      "Could not calculate a median: calculateMedian requires an array of numbers"
    );
    expect(describeMedian([1, "two", 3])).toBe(
      "Could not calculate a median: calculateMedian requires an array of numbers"
    );
  });
});