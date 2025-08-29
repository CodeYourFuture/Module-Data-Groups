// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// When we use a Object and we want to extract any of the elements we don't refers them like a array [0] (position)
// We can use the name of the object and follow the dot and the name of the element, with that we can extract the 
// value of the element. 

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
