function createLookup(arr, key) {
  const lookup = {}; 
  // initialize an empty object to store the lookup table

  // loop through each object in the input array.
  Array.forEach(item => {
  // assign the value of the specified key from the object as the lookup key.
  // and store the  entire object as the corresponding value
  lookup[item[key]] = item;

  })

  return lookup; 
  // needed to return the completed lookup table.
  
}

module.exports = createLookup;


