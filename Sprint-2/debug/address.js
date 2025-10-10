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

// console.log(`My house number is ${address[0]}`);
// is trying to access a property using address[0] and address is an object, not an array.
// it will log undefined.
// to access the houseNumber property, we should use dot notation or bracket notation with string,and either
// way using  object.key or object["key"]
console.log(`My house number is ${address.houseNumber}`);
console.log(`My house number is ${address["houseNumber"]}`);
