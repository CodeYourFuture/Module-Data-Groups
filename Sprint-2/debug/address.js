// Predict and explain first...
/*When we run console.log(`My house number is ${address[0]}`), the JavaScript engine tries to access the value at the key "0"in the address object. However,address is an object, not an array, and it doesn't have a property with the key"0". As a result, address[0]evaluates to undefined, so the output will be: `My house number is undefined`

To access the house number correctly, we should use dot notation or bracket notation with the actual property name, like address.houseNumber or address["houseNumber"].*/

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
//

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address[0]}`);
