// Predict and explain first...
//the original code is using the wrong notation to access our object this will return undefined as we do not have a 0 property.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
//fixed it by puting "houseNumber" in the square brackets.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);
