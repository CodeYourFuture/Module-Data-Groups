function findMax(elements) {
  // filter to return only numbers or an empty array
  const numbers = elements.filter((item) => Number.isFinite(item));
  // if numbers present in array return largest number or return -Infinity for empty array
  return numbers.length ? Math.max(...numbers) : -Infinity;
}

module.exports = findMax;
