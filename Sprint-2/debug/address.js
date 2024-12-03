// Predict and explain first...
//The code uses template literals (backticks with ${}) to insert the value of address.houseNumber into the string.
	//The address object contains several properties, including houseNumber which has the value 42.
	//The code accesses this property directly using address.houseNumber and dynamically places its value in the string.

//As a result, the console log will output the string:
//My house number is 42

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
