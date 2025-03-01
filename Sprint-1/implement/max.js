function findMax(elements) {
  let filteredByNumber = elements.filter((num) => typeof num === "number");
  if (filteredByNumber.length == 0 && elements.length == 0) {
    return Math.max(...filteredByNumber);
  } else if (filteredByNumber.length == 0 && elements.length > 0) {
    return "Enter valid numbers";
  } else {
    return Math.max(...filteredByNumber);
  }
}

module.exports = findMax;
