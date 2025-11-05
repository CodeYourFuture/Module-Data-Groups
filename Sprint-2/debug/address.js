// Predict and explain first...

//answer:  this code defines an object called address, and it has several properties (key–value pairs).

// This code should log out the houseNumber from the address object
// but it isn't working...
//answer : it doesnt work because in object,  we dont use numeric index and the result is undefined

// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`); wrong
console.log(`My house number is ${address.houseNumber}`); //correct
