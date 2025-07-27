function tally(input) {
  if(!Array.isArray(input)) throw new Error("Input is not valid.");;
  const queryParams = {};
  for (const char of input) {
    queryParams[char] = queryParams[char] !== undefined ? queryParams[char] +1 : 1;
  }
  return queryParams;
}

module.exports = tally;
