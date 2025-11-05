// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
  const onlyValues = Object.values(author);
for (const value of onlyValues) {
}
  console.log(onlyValues);




  const studentScores = {
  math: 85,
  science: 92,
  history: 78,
  art: 95
};

   let totalSum = 0;
  const sumArray = Object.values(studentScores);
   
  for (const value of sumArray){
    totalSum = totalSum + value; //totalSum += value;
  }
console.log(totalSum);


// Goal: Calculate the sum of all the student's scores.
// You need to get an array of just the numbers (values) first.
// How would you get an array like: [85, 92, 78, 95] from studentScores?

// Exercise 2: List All Ingredients

// You have a recipe object, and you want to list out all the ingredients.




// Goal: Print a list of all ingredient names (keys) from the 'ingredients' object.
// You need to get an array like: ["flour", "milk", "eggs", "sugar", "bakingPowder"]
// from the 'ingredients' object.

// need to make object interable = array and get the key.values ofthe object

const recipe = {
  title: "Pancakes",
  servings: 4,
  ingredients: {
    flour: "1 cup",
    milk: "1 cup",
    eggs: "2 large",
    sugar: "2 tbsp",
    bakingPowder: "2 tsp",
  },
  instructions: "Mix ingredients, cook on griddle.",
};

const ingredientsList = Object.keys(recipe.ingredients);


for (const value of ingredientsList) {
console.log(value);
};
   

// Exercise 3: Format User Preferences

// A user's preferences are stored in an object. You want to display each preference as "Key: Value".


const userSettings = {
  theme: "dark",
  notifications: true,
  language: "en-US",
  autoplayVideo: false
};

 let userPreferences = Object.entries(userSettings);

  for (const values of userPreferences) {
    console.log(values); //console.log(`${key}: ${value}`); //console.log(`${pair[0]}: ${pair[1]}`);
  };

// Goal: Log each setting in the format "Key: Value".
// Example output:
// "theme: dark"
// "notifications: true"
// ...
// This requires working with both the key and the value for each item.