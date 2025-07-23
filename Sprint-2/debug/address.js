// Predict and explain first...--
  //In this code housenumber is Undefined - Objects are accessed with property names, not numeric indexes
 
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


console.log(`My house number is ${address.houseNumber}`);// address.houseNumber directly accesses the houseNumber property in the object.
