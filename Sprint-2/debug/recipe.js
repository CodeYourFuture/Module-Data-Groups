// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
function printIng(myArray) {
  let ingrArr = recipe.ingredients;
  const ingredientsList = () => {for(let ing of ingrArr){
    console.log(ing);
  }};
  return ingredientsList;
}
const ingredientsList = printIng(); 
console.log(`${recipe.title} serves ${recipe.serves} ingredients:`);
ingredientsList();


/*
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
function printIng (myArray){
  for(let key in myArray){
    if(Array.isArray(myArray[key])){ //check if we have array item in our object.
      myArray[key].forEach(item => console.log(item)); //for each item in arr print them
    }
  }
}
console.log(`${recipe.title} serves ${recipe.serves} ingredients:`);
printIng(recipe);



console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);
this logs // bruschetta serves 2 ingredients: title: "bruschetta", serves: 2, ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
*/
