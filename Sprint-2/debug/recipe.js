// Predict and explain first...
//Ans : it will return bruschetta ,serves 2 and object . The 1st & 2nd values are called with keys and last one is called whole object .

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}
//  ingredients:
//${recipe}`);

console.log(recipe.title+' serves'+recipe.serves);
console.log ("ingredients:");
  
// loop through the array

for (const item in recipe.ingredients)
{
    console.log(recipe.ingredients[item]);
}
