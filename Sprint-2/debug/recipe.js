// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// const recipe = {
//   title: "bruschetta",
//   serves: 2,
//   ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
// };
//
// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

// there's an error in line 15. Instead of logging all the ingredients, line by line, the code is telling to give the whole object
// and the representation of it will be logged into the console.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
