// Predict and explain first...
// Answer | It is trying to acces the object trough index 0, insted of the key string houseNumber. I think it is going to be undefined.
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

console.log(`My house number is ${address.houseNumber}.`);
