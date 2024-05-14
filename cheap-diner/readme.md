## Selecting Objects from an Array

<!--```objectives
- Write a function to process an array of objects
- Sort objects in an array based on a specific property
- Select an object based on its position in the sorted array
```-->

### The Scenario

Atticus has been invited to a dinner party, and he decides to purchase a meal to share with the party. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more meals, he will always buy the second-cheapest. If there is no choice, then he will buy the only meal given to him. If there are no meals available, then he will return `null`.

Given an array of `Meal` objects, write a function that returns the name of the `Meal` he will buy for the party. If given an array of only one, Atticus will buy that `Meal`.

```js
let setOne = [
  { name: "Turkey", price: 8.99 },
  { name: "Chicken", price: 13.99 },
  { name: "Lobster", price: 10.99 },
];
```

> chooseMeal(setOne) should give the answer `"Lobster"`.

If given an empty array:

```js
let emptyArray = [];
```

> `chooseMeal(emptyArray)` should give the answer `"Nothing :("`.

### Writing the Function

Write a function named chooseMeal that takes an array of meal objects and returns the name of the meal Atticus would choose.

```js
function chooseMeal(mealArray) {}
```

### Expected Output

For the given examples, the output should be `"Lobster"` and `"Nothing :("` respectively.
