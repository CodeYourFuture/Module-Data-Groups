// Predict and explain first...
// so the first recipe.title prints the correct title, the second recipe.serves also prints the correct number of serves but the last recipe in template literals will throw error or perhaps undefined as recipe is an object and needs different method to access it. so basically inorder to access the key and values inside an object, it should be accessed by using object name followed by a dot and one of the values or keys inside it (whatever we want to use).
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
let recipeEntries = Object.entries(recipe);
for (const [reicpeKey, recipeValue] of recipeEntries) {
  if (reicpeKey === "ingredients") {
    console.log("Ingredients:");
    for (const ingredient of recipeValue) {
      console.log(ingredient);
    }
  } else {
    console.log(`${reicpeKey}: ${recipeValue}`);
  }
}
