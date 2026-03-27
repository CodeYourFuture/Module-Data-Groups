function checkLivesNearCYF(person) {
  const cyfLocations = [
    "Birmingham",
    "Cape Town",
    "Glasgow",
    "London",
    "Manchester",
  ];
  return cyfLocations.includes(person.city); // Changed from .location to .city
}

const mo = {
  name: "Mo",
  city: "Glasgow", // Uses city
  focus: "React",
};

const sayed = {
  name: "Sayed",
  city: "Edinburgh", // Uses city
  focus: "SQL",
};

console.assert(checkLivesNearCYF(mo)); // true - Glasgow is in CYF locations
console.assert(!checkLivesNearCYF(sayed)); // true - Edinburgh is NOT in CYF locations
