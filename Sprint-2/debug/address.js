// Predict and explain first...
// This will print My house number is undefined
// Because the template literal tries to access the number like it is an array,
// But this is incorrect as it is an object which uses a different way to access 
// elements

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
