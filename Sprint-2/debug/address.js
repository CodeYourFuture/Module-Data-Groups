// Predict and explain first...

// address variable is an object - not array.
//So address[0] is incorrect to get houseNumber property

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
