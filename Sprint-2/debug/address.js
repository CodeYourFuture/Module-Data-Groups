// Predict and explain first...
// it will not log out the correct result because we are trying to access it using index [0], To get the houseNumber, we either use address.houseNumber or address["houseNumber"]

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

module.exports = address;
