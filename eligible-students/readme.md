## Filtering Eligible Students

<!--```objectives
- Understand object manipulation
- Understand array filtering
- Understand comparison in JavaScript
```-->

### Instructions

This kata may look familiar! You may have previously solved this kata using arrays and the map and filter methods.

```js
const attendance = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];
const getEligibleStudents = (students) =>
  students.filter((student) => student[1] >= 8).map((student) => student[0]);
```

This time we've stored each student's information in an object instead of an array. This is an array of objects.

```js
const attendances = [
  // the square bracket shows that this is an array
  { name: "Ahmed", attendance: 8 }, // the curly brackets show that this is an object
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];
```

Only students who have attended enough classes are eligible to sit an exam. Create a function which:

- Accepts an array which contains all the students' names and their attendance counts
- Returns an array containing only the names of the who have attended AT LEAST 8 classes

```js
const attendances = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];

function eligibleStudents2(attendances) {
  // write code here
}
```

Complete the kata and then compare your solution to your previous one. Can you see how using objects leads to more clear code? Write a comment in your code to explain why you think this is.
