const sum = require("./sum.js");

function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (!list.every((value) => Number.isFinite(value))) {
    throw new Error("calculateMean requires an array of numbers");
  }

  const total = sum(list);
  const mean = total / list.length;

  return mean;
}

module.exports = calculateMean;
