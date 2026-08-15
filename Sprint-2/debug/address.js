// Predict and explain first...
// that it will throw a undefined error because the address object is not defined in the code snippet. The code snippet is missing the definition of the address object, which is necessary for the console.log statement to work correctly.

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
