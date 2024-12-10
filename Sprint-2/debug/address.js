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

// 〰️ Correct way to access the houseNumber property
console.log(`My house number is ${address.houseNumber}`);

// 〰️ The issue with the code is that it's trying to access address[0], which is not correct because address is an object, and objects in JavaScript don't use numeric indices like arrays. Instead, we should access the houseNumber property directly using the correct key.

// 〰️ We need to use the correct property key to access the value. Since the key for the house number in the address object is "houseNumber", we should use address.houseNumber to access it.

// 〰️ address.houseNumber accesses the houseNumber property of the address object.
// 〰️ The result will correctly log: "My house number is 42"