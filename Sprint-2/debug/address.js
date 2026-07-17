// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// const address = {
//   houseNumber: 42,
//   street: "Imaginary Road",
//   city: "Manchester",
//   country: "England",
//   postcode: "XYZ 123",
// };
//
// console.log(`My house number is ${address[0]}`);

// => in line 15, the object is being called, but the index, instead of a key
// is put inside the square brackets. This should result in undefined value, since
// we are treating object as an array.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
