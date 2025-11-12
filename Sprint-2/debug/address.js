// Predict and explain first...
// Answer: when the console.log runs, it will return `My house number is undefined` because `0` is not a key in the object so its value will be undefined

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

console.log(`My house number is ${address["houseNumber"]}`);
