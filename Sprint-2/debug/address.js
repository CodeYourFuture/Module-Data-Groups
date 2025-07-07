// Predict and explain first...
// prediction before running code: This leads to an error as this isn't an array where values accessed via index/position. values should be accessed via keys/properties in objects.
//prediction after running code: logged out "undefined" for ${address[0]}` as this expression can't be matched with any property inside the object

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
