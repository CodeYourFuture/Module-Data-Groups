function sum(elements) {
  let summarize = 0;

  if (elements.length === 0) {
    return 0;
  }

  if (elements.length === 1) {
    return elements[0];
  }

  if (elements.every((el) => typeof el === "number")) {
    for (let i = 0; i < elements.length; i++) {
      summarize += elements[i];
    }
    return summarize;
  }

  if (elements.every((el) => typeof el === "string")) {
    return elements.join("");
  }

  if (elements.some((el) => typeof el !== "number")) {
    let numbers = [];
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === "number") {
        numbers.push(elements[i]);
      }
    }
    for (let i = 0; i < numbers.length; i++) {
      summarize += numbers[i];
    }
    return summarize;
  }
}
module.exports = sum;
