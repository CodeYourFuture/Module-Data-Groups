// Predict and explain first...
// This code is intended to log the house number from an address object.
// However, it seems that the console log is not functioning as expected and the result is undefined.
// The issue lies in the way the property is being accessed from the address object.
// to fix this, we need to access the property using the correct key.



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
