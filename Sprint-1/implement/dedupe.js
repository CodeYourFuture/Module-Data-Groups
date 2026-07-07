function dedupe(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newVersion = new Set(arr);

  // If no duplicates, return the original array
  if (newVersion.size === arr.length) {
    return arr;
  }

  // Otherwise return the deduped array
  const newArray = [...newVersion];
  return newArray;
}

console.log(dedupe([1, 2, 3]));
console.log(dedupe([10, 30, 20, 50, 20, 10]));
console.log(dedupe(5, 1, 1, 2, 3, 2, 5, 8));
