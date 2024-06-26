## Arrays in Objects Exercise

<!--```objectives
- Loop through object properties
- Access arrays stored inside objects
- Access and set specific properties of an object
```-->

### Brief

As you can have an Array of Objects, you can also store Arrays in Objects. In this exercise, you'll practice:

- How to loop through the properties (keys) of an Object and read its values.
- How to access an Array stored inside an Object.
- How to access a specific property of an object and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan that contains the missing ingredients for your menus. It is stored in the "weeklyMealPlan" object. Complete the exercises below.

```js
// Here is your weekly meal plan
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};
```

## Kata:

Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array. The weeklyGroceriesToBuy array shouldn't contain any repeating items.

```js
let weeklyGroceriesToBuy = [];
```

## Kata:

Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.

```js
let weekendGroceriesToBuy = [];
```

## Kata:

Loop through your weekly meal plan:

- count how many ingredients you should buy each day
- and update the corresponding properties of numberOfItemsPerWeek object.

```js
let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};
```
