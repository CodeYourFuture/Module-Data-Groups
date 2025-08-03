// Predict and explain first...

// It returns back "My house number is undefined" because it's accessing properties using an index instead of the property name.

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

//added dot notation to access houseNumber

console.log(`My house number is ${address.houseNumber}`);
