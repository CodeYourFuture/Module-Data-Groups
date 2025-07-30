// Predict and explain first...
// In this case address is not an array and has no key index, its output will be undefined. address is an object and to get the correct output we have to access the property using its key name.
// The correct way to access the houseNumber property is by using address.houseNumber.


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
