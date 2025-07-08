// Predict and explain first...

/* recipe is an object we can not put directly in  a template literal string output :bruschetta serves 2
  ingredients:
[object Object]*/ 
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

/* Using a foreach loop is a good opportunity to destructure objects*/

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}
//ingredients:
//${recipe}`);
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
recipe.ingredients.forEach(ingredient => {
  console.log(ingredient);
});
