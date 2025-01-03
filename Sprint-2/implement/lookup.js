



function createLookup(currencyCodes) {
  const createdObject = {};
  for (let i = 0; i < currencyCodes.length; i++) {
    const [key, value] = currencyCodes[i]; // De-structure the array into key-value pairs
    createdObject[key] = value; // Assign the key-value pair to the lookup object
  }
  return createdObject; // Return the lookup object
}

// Example usage
const lookup = createLookup([
  ["USD", "Dollar"],
  ["EUR", "Euro"],
  ["JPY", "Yen"],
]);
console.log(lookup); 
// Output: { USD: "Dollar", EUR: "Euro", JPY: "Yen" }



//console.log(
  //createLookup([
   // ["US", "USD"],
    //["UK", "GB"],
  //])
//);

module.exports = createLookup;
