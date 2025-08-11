
module.exports = calculateMedian;

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  
  if (list.length % 2 === 1) {
    return list[middleIndex]; // Return the middle element for odd-length lists
  }
  
  return (list[middleIndex] + list[middleIndex - 1]) / 2; // Return the average of the two middle elements for even-length lists
}

module.exports = calculateMedian;
