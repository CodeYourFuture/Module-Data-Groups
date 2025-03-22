// Predict and explain first... It's will be undefined. I will create separate const value and just after made console.log (value). 

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem - it's showing typeError. I think it's because 'for' as I know it's for loop but I don't see any loop there. 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
 console.log(value);
}

const value = author
console.log(value);


