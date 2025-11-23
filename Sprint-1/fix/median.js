// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  const numbers = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      numbers.push(list[i]);
    }
  }

  if (numbers.length === 0) {
    return null;
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  const middleIndex = Math.floor(numbers.length / 2);

 
  if (numbers.length % 2 === 0) {
  
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    
    return numbers[middleIndex];
  }
}


module.exports = calculateMedian;
