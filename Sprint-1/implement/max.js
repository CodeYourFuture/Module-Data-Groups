function findMax(list) {

    // check if input is array

  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }

  // filter out non-numeric values
  list = list.filter((list) => typeof list === "number");

  if (list.length === 0) {
    return -Infinity;
  }
  if (list.length === 1) {
    return list[0];
  }

  return Math.max(...list);
}

module.exports = findMax;
