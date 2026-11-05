// Predict and explain first...
/*
The ${recipe}`); line does not call the object correctly and shows [object Object]
This is because it tries to convert the whole object to a string but it doesnt know how to display the information
to fix this i used a for loop and iterated through the ingredients key's array to print each ingredient on a new line
*/
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients: `)

for (let i=0; i < recipe.ingredients.length; i++) {
  console.log(`${recipe.ingredients[i]}`)
}

