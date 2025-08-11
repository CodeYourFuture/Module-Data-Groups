/*const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
const twinData = profileData;
twinData.firstName = "Emilia";
console.log(profileData === twinData);
console.log(profileData.firstName); */
// sus they share the same location in memory

const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData.cityOfResidence);

profileData.cityOfResidence = "Manchester";

console.log(profileData.cityOfResidence);

