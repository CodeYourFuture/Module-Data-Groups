// In programming, the process of repeating something is called iteration.
// In programming, we can iterate by using a loop🧶
// 🧶 loop: A loop is a sequence of instructions that is continually repeated until some condition is reached.
// In particular, we can use a for...of statement to sum the elements of the array.

function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
  
}
calculateMean([10, 20, 30, 40, 50]);