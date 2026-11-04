function sum(elements) {
  if (!Array.isArray(elements) || elements === "") {
    throw new Error("sum requires an array of numbers");
  }

  if (elements.some((element) => typeof element === "string")) {
    throw new Error("sum requires an array of numbers");
  }
  let result = 0;
  for (const element of elements) {
    result += element;
  }

  return result;
}

module.exports = sum;
