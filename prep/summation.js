// to sum a list we can start by creating a variable total with an initial value of 0.
// add each value in total.

// function sumValues(list) {
//     let total = 0;
//     total += list[0];
//     total += list[1];
//     total += list[2];
//     total += list[3];
//     total += list[4];

//     return total;
// }
// console.log (sumValues([1, 2, 3, 4, 5]));

// however this approach is flawed(imperfect)

// Iteration: the process of repeating something is called iteration.
// in programming we can iterate by using a loop.
// Loop is a sequence of instructions that is continually repeated until some condition is reached.

function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
}
calculateMean([10, 20, 30, 40, 50]);