// Predict and explain first...
// Prediction:
// I expect the code to output:
// My house number is 42

// Explanation:
// The address object contains a property called houseNumber
// with the value 42. We can access this property using
// dot notation (address.houseNumber) and display it
// inside a template literal using console.log().

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
