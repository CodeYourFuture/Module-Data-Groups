// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

/*const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);*/

//----------------------------------------------------------------------------------------------------------

// Prediction and explanation
/*The output will be:
bruschetta serves 2
  ingredients:
[object Object]

The template literal creates a single string.
${recipe.title} is replaced with "bruschetta".
${recipe.serves} is replaced with 2.
${recipe} is an object, so JavaScript must convert it to a string before inserting it into the template literal.
A plain object's default string representation is "[object Object]".

So JavaScript effectively creates this string before passing it to console.log():

bruschetta serves 2
  ingredients:
[object Object]

If the goal is to print each ingredient, we need to access the ingredients array (recipe.ingredients) instead of the whole recipe object. */

//Fixed code

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} ingredients:`);
//recipe.ingredients.forEach((ingredient) => console.log(ingredient));
for (let ingredient of recipe.ingredients) {
  console.log(ingredient);
}
