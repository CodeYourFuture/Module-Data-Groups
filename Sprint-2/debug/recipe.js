// Predict and explain first...

// Answer | It would not log out the ingredients, as the key and indexes for each ingredient were not called.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

for (const key in recipe) {
  if (key === "ingredients") {
    for (const ingredient of recipe[key]) {
      console.log(ingredient);
    }
  } else {
    console.log(recipe[key]);
  }
}
