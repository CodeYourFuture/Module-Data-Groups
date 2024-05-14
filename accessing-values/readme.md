## Accessing Values

<!--```objectives
- Access values in an object using dot notation
- Find the type of a value
```
-->

### What is the type of each property?

This object has 4 properties. The properties of the object are all primitive types (string, number or boolean).

```js
let dog = {
  breed: "Dalmatian",
  name: "Spot",
  isHungry: true,
  happiness: 6,
};
```

## Log the name and breed of this dog using dot notation.

You can access the values of each property using dot notation.

```js
let dogName; // complete the code
let dogBreed; // complete the code

console.log(`${dogName} is a ${dogBreed}`);
```

### Expected Output

> `Spot is a Dalmatian`

## Accessing Object Properties

<!--```objectives
- Access object properties using bracket notation
- Use a variable as a key to access an object's property
```-->

### What is bracket notation?

You can also access the value of a property using bracket notation. Bracket notation can be used when the property is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

```js
let capitalCities = {
  UnitedKingdom: "London",
  China: "Beijing",
  Peru: "Lima",
};
```

## Working with Complex Objects

<!--```objectives
- Access properties of nested objects and arrays within an object
- Sort an array of strings
- Use console.log to print multiple lines
```-->

### Objects with nested properties

An object's properties can have values that are other objects or arrays.

```js
let basketballTeam = {
  name: "Chicago Bulls",
  numberOfPlayers: 15,
  topPlayers: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"],
  homeStadium: {
    name: "United Center",
    capacity: 21000,
    address: "1901 W Madison St",
  },
};
```

## Access and manipulate properties

### Write code that:

- [ ] accesses the basketball team's top players array
- [ ] sorts the top players in alphabetical order
- [ ] logs the name of each player on a new line

```js
// Write your code here
```

### Expected Output

```
Dennis Rodman
Michael Jordan
Scottie Pippen
```
