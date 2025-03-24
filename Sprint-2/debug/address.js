// Predict and explain first...

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

// You can't get values from objects using indexes, you need to reference a key in the object

// To reference object key you can have two notations:

// object.key
// object['key']

// Bracket notation is useful when your property name has spaces or it is a variable.

console.log(`My house number is ${address.houseNumber}`);

// or

console.log(`My house number is ${address['houseNumber']}`);
