// Predict and explain first...
  // undefind is expect. because index access is for arrays not for object. 
  // for object you mention the key to get the value.


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
// either access via (.) properties
console.log(`My house number is ${address.houseNumber}`);
//OR prakets notation
console.log(`My house number is ${address['houseNumber']}`);
