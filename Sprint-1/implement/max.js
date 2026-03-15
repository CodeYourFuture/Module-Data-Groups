function findMax(elements) {
  check = elements.constructor === Array;
  if (check === true) {
    let numbers = elements.filter((element = isFinite));
    if (numbers.length === 0) {
      return -Infinity;
    }

    let numbersA = Math.max(...numbers);
    return numbersA;
  } else {
    return -Infinity;
  }
}

console.log(findMax([4, "6", 2, "car", 1]));

module.exports = findMax;
