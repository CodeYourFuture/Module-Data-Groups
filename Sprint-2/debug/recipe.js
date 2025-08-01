// Predict and explain first...
// to log out the title and serves we need to use dot notation to access the property value associated with the key.
// instead to access ingredients values and print them in different lines, we need to loop over recipe.ingredients.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],

  
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);

for(ingredient of recipe.ingredients) {
  console.log(ingredient)
}
