// Predict and explain first...

// I guess the bug could be related to how to access property in an object.
// address[0] may not be able to access houseNumber as a key
// if we change address[0] to address['houseNumber'] or address.houseNumber, it may resolve the problem.

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

console.log(`My house number is ${address.houseNumber}`);

// After trying both address["houseNumber"] and address.houseNumber,
// console.log can successfully print out the statement with right number accordingly.
