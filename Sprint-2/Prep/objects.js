const profileData = {
    firstName: "Francesco",
    lastName: "Leoni",
    age: 33,
  };
  const twinData = profileData;
  twinData.firstName = "Emilia";
  console.log(profileData === twinData);
  console.log(profileData.firstName);