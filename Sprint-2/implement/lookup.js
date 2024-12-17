function createLookup(input) {
  // implementation here

  let currencyPairs = {};
  //the input will be an array of arrays

  for (const singleArray of input) {
    if (singleArray.length === 2) {
      //get a single array, loop through that and get the property and value
      currencyPairs[singleArray[0]] = singleArray[1];
    }
    else {
      console.error(`Invalid input ${singleArray}`);
    }
  }

  return currencyPairs;

}

//console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;
