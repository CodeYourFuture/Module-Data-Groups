// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// My prediction of what will happen:
// I think there will be a reference or type error.
// The code is meant to log "My house number is 42"
// But an object is not iterable and you can't reach a value through an index
// You need to find it using the key, houseNumber
// So I think there will be an error as the code treats address as an array when it is an object.

// My explanation:
// After running the code, it turned out to not throw an error.
// Instead it logged "My house number is undefined" to the console.
// This might be because JavaScript is often leanient and isn't always loud about errors.
// So the code can keep running undisturbed.
// To fix it to its intended result I change 0 to "houseNumber"
// I could have swapped to dot notation but decided to stick with the brackets already there.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);
