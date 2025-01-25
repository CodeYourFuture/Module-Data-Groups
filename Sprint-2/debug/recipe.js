// Predict and explain first...
   //the output will be bruschetta serves 2
   //ingredients:
  //  {
  //   title: "bruschetta",
  //   serves: 2,
  //   ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
  // };
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};


console.log(`${recipe.title} serves ${recipe.serves}
  ingredients: \n ${recipe.ingredients[0]} \n ${recipe.ingredients[1]} \n ${recipe.ingredients[2]} \n ${recipe.ingredients[3]}`);

