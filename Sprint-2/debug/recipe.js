// Predict and explain first...
/*
The printing of title and serves is absolutely correct, but to print ingredients on a new line isn't correct. 
To retrieve values, we use Object.values(recipe). To print ${recipe} isn't the right way. We can use a for...of 
loop to print each ingredient on a new line.
*/
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
for(const ingredients of recipe.ingredients){
  console.log(ingredients);
}
