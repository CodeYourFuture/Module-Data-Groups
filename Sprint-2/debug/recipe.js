// Predict and explain first...
//this will log: bruschetta serves 2 ingredients: title: "bruschetta",
  // serves: 2,
  // ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
//instead of the ingredients it prints the whole object again , also there is no \n 

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

let ingredients=[]
 for(let ingredient of recipe.ingredients){
  ingredients.push(ingredient)
 }
  console.log(
  `${recipe.title} serves ${recipe.serves} ingredients:\n${ingredients.join("\n")}`)

