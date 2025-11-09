// Predict and explain first...
// the code try to print a array in a single line of ingredients and also has 
// syntax erros 
// This program should log out the title, how many it serves and the ingredients.
// I need to get the values but firnt need to make the object interable=use Object.value 
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
title: "bruschetta",
serves: 2,
ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

let menuList = Object.values(recipe.ingredients);

console.log (`${recipe.title}`);
 console.log (`serves ${recipe.serves}`);


for (const ingredientName of menuList) {
console.log(ingredientName);
}