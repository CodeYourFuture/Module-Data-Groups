function dedupe(arr) {
 
  let uniqueArr = []; // create an empty array to store the unique values
  uniqueArr = [...new Set(arr)]; // use the set object to remove duplicates and [...] means spread the values back into the empty array

  return uniqueArr; // return the unique values
}

module.exports = dedupe;