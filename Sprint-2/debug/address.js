// Predict and explain first...
/* I expect the code to produce an error because originally it is trying to console log the [0] index of a property in an object when there is no "0" in the address object.
 */

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

console.log(`My house number is ${address["houseNumber"]}`);
// Or we could access the house number like this:
console.log(`My house number is ${address.houseNumber}`);
