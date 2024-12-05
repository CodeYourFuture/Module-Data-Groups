// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {// so this is an object that is defined as a address
  houseNumber: 42,// the object has 5 properties, the syntax is correct, curly braces, the key words with columns
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);// the problem is with address[0] that is looking for a property that has key 0 in the object. the address object has a key houseNumber that has a value of 42. thus, address[0] return undefined
console.log(`My house number is ${address.houseNumber}`);// this corrects the return value, we are accessing via dot notation the actual name which is the houseNumber