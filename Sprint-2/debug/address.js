// Predict and explain first...
// the code below has all the information for an address and is trying to log the house number to the console
// i expect it to log undefined or an error because the values in the object are not accessed correctly as its trying to use an index as if it is an array and not defined as a key in the object
// after running the code it came back as "my house number is `undefined`" 
// i think using "address.houseNumber" or "address["houseNumber"] would work instead of "address[0]"


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
console.log(`My house number is ${address["houseNumber"]}`); // corrected to print the house number from the address object
