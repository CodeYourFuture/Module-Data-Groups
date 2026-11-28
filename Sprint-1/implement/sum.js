function sum(list) {
  if (!Array.isArray(list)) {
    throw new Error("sum requires an array of numbers");
  }

  if (!list.every((item) => typeof item === "number" && !Number.isNaN(item))) {
    throw new Error("sum requires an array of numbers");
  }

  return list.reduce((total, number) => total + number, 0);
}

module.exports = sum;
