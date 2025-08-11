// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper", "yogurt"],
};




function log(recipe){
  console.log(`${recipe.title} serves ${recipe.serves}
  `);

  let ingredients = recipe.ingredients;
  for(let i =0; i < ingredients.length; i++){
    console.log(ingredients[i])
  }
}

log(recipe);