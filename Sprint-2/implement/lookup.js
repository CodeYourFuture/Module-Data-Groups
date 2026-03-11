function createLookup(pairs) {
  // implementation here
const lookup = {};// create an empty object to store key-value pairs

for (const pair of pairs) {// iterate through each pair in the input array
    const key = pair[0];// extract the first element of the pair as the key
    const value = pair[1];// extract the second element of the pair as the value
    lookup[key] = value;// add the key-value pair to the lookup object
  }
  return lookup;
};  


module.exports = createLookup;
