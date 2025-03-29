// function findMax(elements) {
//   if (elements.length === 0) {
//     return -Infinity;
//   }

//   let max = -Infinity;

//   for (let i = 0; i < elements.length; i++) {
//     if (typeof elements[i] === "number" && !isNaN(elements[i])) {
//       if (elements[i] > max) {
//         max = elements[i];
//       }
//     }
//   }

//   return max;
// }

//Refactored code using Math.max
function findMax(elements) {
  const validNumbers = elements.filter(
    (num) => typeof num === "number" && !isNaN(num)
  );

  return validNumbers.length ? Math.max(...validNumbers) : -Infinity;
}

module.exports = findMax;
