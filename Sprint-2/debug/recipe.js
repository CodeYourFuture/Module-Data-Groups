// Predict and explain first...
//i think ingredients will display all of receipts and i believe i have to iterate receipt.ingredients

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
console.log(`${recipe.title} \nserves ${recipe.serves}`);

let receiptIngredients = recipe.ingredients.map((element) =>
  console.log(element)
);
