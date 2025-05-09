// Predict and explain first...
// The current code tries to access the houseNumber property of the address object using address[0]. 
// This doesn't work because object properties in JavaScript are typically accessed using dot notation (address.houseNumber) or bracket notation with a string key (address["houseNumber"]).
//address[0] would only work if address were an array or if there was a property with the key 0 on the object, which isn't the case here.


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
