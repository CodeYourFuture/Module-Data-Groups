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

/* =======> Predict and explain first...
The code will not work because it is attempting to access the address object using an array index, which is incorrect.

console.log(`My house number is ${address[0]}`);

=======> To fix:
Instead, we can access the properties of an object using either dot or bracket notation.
*/

console.log(`My house number is ${address.houseNumber}`);
