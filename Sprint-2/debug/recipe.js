// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}   //these codes will not return the expected output.  it will return:bruschetta serves 2    \n  ingredients:\n[object Object]
  //ingredients:
//${recipe}`);
console.log(recipe.title)
console.log(recipe.serves)
for(const element of recipe.ingredients){
  console.log(element)
}
