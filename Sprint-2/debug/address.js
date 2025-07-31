// Predict and explain first...
/* the code is missing the function that will execute the values, 
running the code in the terminal outputs undefined. The houseNumber is 
not showing up in the output. Also to at the calling function console.log
the ${address[0]} is wrong and that's not how you access values in objects
, it would be fine if it was an array, but not in the case of an object
a dot would have to replace [0] to access the value of the object. {address.houseNumber}*/

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
function resInformation(result) {
  return result;
}

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
