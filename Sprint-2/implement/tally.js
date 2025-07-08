function tally(input) {
  if(!Array.isArray(input)) throw new Error("Input is not valid.");;
  const queryParams = {};
  for (const char of input) {
    queryParams[char]=0;
  }
  for (const char of input) {
    queryParams[char]++;
  }

  return queryParams;
}

module.exports = tally;
