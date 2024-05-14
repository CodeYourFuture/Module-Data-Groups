## Computing Sum from Object Properties

<!--```objectives
- Write a function to process an array of objects
- Extract and sum specific properties from objects
```-->

### The Task

You are to create a function that takes an array with objects and returns the sum of people's budgets. For example:

```js
getBudgets([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]);
```

Should give return the answer of `62600`.

### Writing the function

Write a function named getBudgets that takes an array of people objects and returns the sum of their budgets.

```js
function getBudgets(peopleArray) {}
```

### Expected Output

For the given example, the output should be `62600`.
