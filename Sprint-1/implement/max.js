function findMax(elements) {
  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      if (max < elements[i]) {
        max = elements[i];
      }
    }
  }
  return max;
}

const arr = ["a", "hello", false, null, undefined, {}, []];
console.log(findMax(arr));

module.exports = findMax;
