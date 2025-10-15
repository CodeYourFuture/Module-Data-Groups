function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input should be an array");
  }
  if (arr.length === 0) {
    return {};
  }

  arr = arr.flat();

  let result = {};
  for (element of arr) {
    const key =
      typeof element === "object" ? JSON.stringify(element) : String(element);

    result[key] = (result[key] || 0) + 1;
  }

  return result;
}

tally(["a", "a", "a"]);

module.exports = tally;
