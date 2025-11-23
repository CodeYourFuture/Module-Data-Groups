// Predict and explain first...
// if i want to access the ingredients and present each item on a new line i will use \ and the index of each item
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}
//ingredients:
//${recipe.ingredients[0]}
//${recipe.ingredients[1]}
//${recipe.ingredients[2]}
//${recipe.ingredients[3]}`);
console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
${recipe.ingredients.join("\n")}`);
// this is the shortest way to access each item in the array and present it on a new line
