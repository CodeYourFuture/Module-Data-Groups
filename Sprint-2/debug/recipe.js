// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);
// When you using  ${recipe} in a template literal javaScript tries to convert the entire object to a string
// it will log  [object Object].
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients");
recipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
