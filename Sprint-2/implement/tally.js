function tally(element) {
  if (!Array.isArray(element)) {
    throw new Error("Input must be an array");
  }

  const result = {};
  for (const item of element) {
    
    if (result[item]) 
      result[item]++;
     else 
      result[item] = 1;
    
  }

  return result;
}

module.exports = tally;
