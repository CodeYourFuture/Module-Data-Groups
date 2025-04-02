// const profileData =["Fanceso", "Leoni", 33, "Manchester"];
//This array contains the first name, last name, age, and city of the person. In this case it is not appropraite data for a person, because each element is not the same data type and does not have a label.
//The correct data type for this array would be an object with properties for each piece of information.
// console.log(profileData[1]);  Leoni
// console.log(profileData[2]);  33


const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
};

profileData.city = "Manchester";
//We added and mutated the profileData object to add a key-value pair

profileData.age++;
//We incremented the age property by 1

console.log(profileData);

console.log(profileData[0],"In line 22"); 
//This line above returns undefined because objects are only accessed by their keys, not by their indices. The first key in the object is "firstName", so we access it using profileData.firstName