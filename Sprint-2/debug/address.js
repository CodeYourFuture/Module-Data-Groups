// Predict and explain first...

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

// "My house number is undefined"
// The reason is that it is an object and not array
// The correct statement is to use the dot operator to access the related field. 
// In this case, the property/field name should be houseNumber in the object address
