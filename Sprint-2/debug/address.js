// Predict and explain first... - I don't see the return, I think it's a problem. I would change [0] to (houseNumber), it's will show undefined error

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

console.log(`My house number is ${address[0]}`);
console.log(`My house number is ${address["houseNumber"]}`);

//I had mistake in my prediction, it does't need return because it's not a function. 
