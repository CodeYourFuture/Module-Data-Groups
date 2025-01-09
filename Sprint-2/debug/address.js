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

console.log(`My house number is ${address.houseNumber}`); // "My house number is 42"

//The problem is that it's trying to access address[0], which is not correct because address is not
// an Array. It is an object, and objects don't use numeric indicate. we can use key and solve the problem
// In this case when we use address.houseNumber we can access the value of this key