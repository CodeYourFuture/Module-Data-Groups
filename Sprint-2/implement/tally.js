function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const counts = {}; 

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts; 
}

module.exports = tally;
