// Predict and explain first...
// We create an object address which has 5 properties.In order to access the value within a property
// like house number we either need to use the dot notation such as address.houseNumber or square brackets such as address["houseNumber"]

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
