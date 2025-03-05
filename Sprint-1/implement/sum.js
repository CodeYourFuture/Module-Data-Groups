function sum(elements) {
  let filteredByNumber = elements.filter((num) => typeof num === "number");
  if (filteredByNumber.length == 0) {
    return elements.length == 0 ? 0 : "Enter valid numbers";
  } else {
    sum = 0
    filteredByNumber.forEach((item) => {
      sum += item;
    });
    return sum;
  }
}

module.exports = sum;
