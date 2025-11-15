function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return -Infinity;
  }
    const numbers = elements.filter(
      (x) => typeof x === "number" && Number.isFinite(x)
    );
    // Filters out all non-numeric values
    if (numbers.length === 0) return -Infinity;
    // Matches empty array behavior
    let max = -Infinity; // All negative and positive numbers are greater than this minimum starting value
    for (const n of numbers) {
      // Loops through each n in array, if greater than max, assigns n to max
      if (n > max) max = n;
    }
    return max;
  
}

module.exports = findMax;
