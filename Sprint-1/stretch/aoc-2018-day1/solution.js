function calculateFrequency(changes) {
  return changes.reduce((acc, change) => acc + change, 0);
}
const input = [+1, -2, +3, +1];
console.log(calculateFrequency(input)); // Output: 3
