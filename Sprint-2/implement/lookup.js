// function createLookup(US, CA) {
//   // implementation here
//   const lookUp = {};
//   lookUp[US] = "USD";
//   lookUp[CA] = "CAD";

// }

module.exports = createLookup;

function createLookup() {
  const countryCurrencyCodes = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
    // add more country-currency pairs here...
  ]; // created a arr variable for the given key-value pairs.
  const lookUp = {}; // created an empty object to store the key-value pairs.
  countryCurrencyCodes.forEach(([code, currency]) => (lookUp[code] = currency)); // used forEach to iterate over the array and add each key-value pair to the object of lookUp as a property. i implemented the forEach  method to iterate over the array to get multiple key-value pairs.
  return lookUp; // returned the final object..
}
