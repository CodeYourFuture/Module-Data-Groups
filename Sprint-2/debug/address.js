// Predict and explain first...
/*
Predict
The function is calling index 0 but there is not an index 0
Console.log will show a ref error
To fix this we need to change the index to [houseNumber]

What actually happened
Console.log showed undefined for that index
Changed index to [houseNumber] this gave us a ref err 
Therefore it must be address.houseNumber
This works
*/
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

console.log(`My house number is ${address.houseNumber}`);
