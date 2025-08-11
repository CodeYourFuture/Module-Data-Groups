// Predict and explain first...
/*address is object because we used  curly bracket */
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

//console.log(`My house number is ${address[0]}`);
// Using dot notation:
console.log(`My house number is ${address.houseNumber}`);

// Or
console.log(`My house number is ${address["houseNumber"]}`);
