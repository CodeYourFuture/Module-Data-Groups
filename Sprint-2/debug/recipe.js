// Predict and explain first...- I think it's will find 'title' and 'serves' but will not find 'ingredients', ingredients will be undefined. 

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line 
// How can you fix it? - I will write console.log for each ingredient's separate , so it's will be in the new line

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

////

console.log(`${recipe.title} serves ${recipe.serves}
ingredients: 
  ${recipe.ingredients[0]}
  ${recipe.ingredients[1]}
  ${recipe.ingredients[2]}
  ${recipe.ingredients[3]
  }`);

  //or

  console.log(recipe.title);
console.log(`Serves: ${recipe.serves}`);
console.log("Ingredients:");
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}

//or

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);