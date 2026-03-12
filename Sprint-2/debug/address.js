// Predict and explain first...
// The address variable is an object literal containing key–value pairs separated by commas. The code originally tries to access address[0], which would only work if the data were in an array. Since address is an object and not an array, there is no index 0, so it returns undefined. To fix the problem we must access the property using its key, for example address.houseNumber.
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
