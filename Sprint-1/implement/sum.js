function sum(elements) {
  let filteredByNumber = elements.filter((num) => typeof num === "number");
  sum = 0;
  if (filteredByNumber.length == 0 && elements.length == 0) {
    filteredByNumber.forEach((item) => {
      sum += item;
    });
    return sum;
  } else if (filteredByNumber.length == 0 && elements.length > 0) {
    return "Enter valid numbers";
  } else {
    filteredByNumber.forEach((item) => {
      sum += item;
    });
    return sum;
  }
}

module.exports = sum;
