// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

/*Ans: My prediction is that because address is an object and not an array, 
therefore, its elements should be accessed by providing the value of key
rather than writing index such as we do in array 0,1,2...*/

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);
