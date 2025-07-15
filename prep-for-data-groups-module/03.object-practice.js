const  person = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 35,
  city:"London"
};
// console.log(person['city'])
// console.log(person.firstName, person.lastName)


// Predict and explain what the console output will be when we run the code above runs.

// const profileData = {
//   firstName: "Francesco",
//   lastName: "Leoni",
//   age: 33,
// };
// const twinData = profileData; //this remain profile data
// twinData.firstName = "Emilia"; // profile data becomes "emilia"
// console.log(profileData === twinData); //true
// console.log(profileData.firstName);// Emilia

// Predict and explain what the console output will be when we run the code above runs.
const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData.cityOfResidence);// undefined

profileData.cityOfResidence = "Manchester"; // Add city residence in the object

console.log(profileData.cityOfResidence);// Manchester
