// Predict and explain first...

// This will come undefined because that is object
// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
//solution
//i add using "." object.houseNumber(key) and the value will come out
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
