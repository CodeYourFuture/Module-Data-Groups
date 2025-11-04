// Predict and explain first...
// My prediction: the code will show an Error or "undefined", the Object is fine but
// called in a wrong way in the last line. we cant use object[number] to get a value
// withing an Object, that works only with arrays. Instead, we need to write
// the name of the key that we need.

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
