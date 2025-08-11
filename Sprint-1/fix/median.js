// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(oldList) {
  if (Array.isArray(oldList)) {
    const numericList = oldList.filter(
      (item) => typeof item === "number" && Number.isFinite(item)
    );
    if (numericList.length === 0) return null;

    const list = [...numericList];

    list.sort((a, b) => a - b);

    if (list.length % 2 === 1) {
      const middleIndex = Math.floor(list.length / 2);
      const median = list.splice(middleIndex, 1)[0];
      return median;
    } else {
      const middleIndex = Math.floor(list.length / 2);
      const median = list.splice(middleIndex - 1, 2);

      const medianValue = (median[0] + median[1]) / 2;

      return medianValue;


      
    }
  } else return null;
}

module.exports = calculateMedian;
const list = [3, 5, , 61, 3];

// console.log(list)
console.log(calculateMedian(list));
