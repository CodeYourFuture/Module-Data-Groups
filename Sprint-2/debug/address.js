/**
 * Let me predict what this code will do before running it.
 * Prediction:
The code tries to log "My house number is 42" but has several issues:

Property access issue: address[0] tries to access a property with key "0" (a numeric string), but the address object has no property named 0. The houseNumber property is stored with the string key "houseNumber".

Expected behavior: The console will log "My house number is undefined" because address[0] doesn't exist.

What should happen: To access the houseNumber property, we should use either address.houseNumber or address["houseNumber"].

Running the code with node address.js:
As expected, the output is:
My house number is undefined
*/

// Fixing the code:

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// Fixed: use dot notation or bracket notation with the correct property name
console.log(`My house number is ${address.houseNumber}`);

// Now when run, it correctly outputs:
// My house number is 42
//
// Explanation:
/**
 * The issue appears when using array indexing ([0]) on an object. Objects in JavaScript use key-value pairs, not numeric indices like arrays. While arrays are a type of object, a plain object doesn't have numeric indices unless you explicitly define them as property names.

To access an object's property, we need to use:
Dot notation: object.propertyName (when the property name is a valid identifier)
Bracket notation: object["propertyName"] (when the property name is dynamic or contains special characters)
In this case, address.houseNumber correctly accesses the value 42.
 */

