// Predict and explain first...
// Answer: address[0] tries to access a property by an index, 
// which is not how object properties are accessed in JavaScript

// This code should log out the houseNumber from the address object
// but it isn't working. Fix anything that isn't working

// console.log(`My house number is ${address[0]}`); wrong
// console.log(`My house number is ${address.houseNumber}`); correct

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
