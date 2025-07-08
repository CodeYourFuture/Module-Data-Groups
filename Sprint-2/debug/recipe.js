// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}\ningredients:`); // add a line break
recipe.ingredients.forEach((ingredient) => { //iterate over ear ingredient in ingredients.
  console.log(ingredient);
})
/* This will log the whole object recipe rather than each ingredient on a different line.
We need to access each item of ingredients from the array seperately.Iterate over them.
we could also use 
console.log(`${recipe.title} serves ${recipe.serves}\ningredients:`);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}*/ 