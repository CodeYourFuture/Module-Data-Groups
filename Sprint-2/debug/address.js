// Predict and explain first...
//I think we will get an error. Objects dont work with indexing. We will either have to use the dot notation or the bracket notation

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
//couls also use address.houseNumber
console.log(`My house number is ${address["houseNumber"]}`);
