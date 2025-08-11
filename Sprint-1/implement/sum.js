// function sum(elements) {
//   // first check that the input is an array and not empty, if it is not an array or it is empty, return 0.
//   if (!Array.isArray(elements) || elements.length === 0) return 0;

//   // then set a variable to hold the total sum and start it at 0
//   let total = 0;

//   /*
//   next loop through each element in the array and check if it is a number type and not a NaN type.
//   If the element is a number, add it to the total sum stored in the variable total.
//   If the element is not a number or is a NaN type, it is ignored and value of total remains unchanged.
//   Then we return total, which is the sum of all numerical elements in the array.
//   */
//   for (const element of elements) {
//     if (typeof element === "number" && !isNaN(element)) {
//       total += element;
//     }
//   }
//   return total;
// }

// I realise that I can refactor this to make it more consice by using the reduce() method, as this accumulates the sum, only adding valid umbers to the total.
function sum(elements) {
  // first check that the input is an array and not empty, if it is not an array or it is empty, return 0.
  if (!Array.isArray(elements) || elements.length === 0) return 0;

  // then use reduce to accumulate the sum of valid numbers
  return elements.reduce(
    (total, element) =>
      typeof element === "number" && !isNaN(element) ? total + element : total,
    0
  );
}

module.exports = sum;
