# ToDo List App

The files in this folder implements a ToDo List App that allows a user to
- Create a new ToDo task
- Delete a ToDo task
- Display all ToDo tasks
- Changing the "completed" status of a ToDo task

Each ToDo task has two properties:
  - `task`: A string describing the task 
  - `completed`: a Boolean value that indicates whether the task is completed or not 

## Installation

To view the website, open `index.html` with Live Server in VS Code.

**Note**: The app is loaded **as ES modules** in the HTML file, and as such, the HTML file must be accessed via the HTTP or HTTPS protocol.

## Understanding how the code is organized as ES modules

- [What is ES Modules?](00-what_is_ES_modules.md)
- [How to use ES modules with Node.js and Jest?](01-using_esm_with_nodejs_and_jest.md)
- [A guide to modularize a web app](02-guide_to_modularize_code.md)

## Instructions

In this exercise, your objective is to implement additional features.

#### Feature 1: Mass delete of completed ToDos

Add a "Delete completed tasks" button that, when clicked, will delete all the completed ToDos. You should 
- In `todos.mjs`, implement a function to delete all completed tasks in the given ToDo List
- In `todos.test.mjs`, implement a test to check your function.
- In `script.js`, call the function to delete all completed tasks whenever the user clicks a "Delete All" button.

#### Stretch 1: Set deadlines for ToDos

We want users to be able to set, and see, deadlines for their ToDos.

When creating a ToDo we want the user to be able to use a datepicker input to specify a deadline for the Todo.
If no date is selected, the ToDo is considered having no deadline.

When displaying a ToDo in the list, display the deadline only if the ToDo has one.

#### Stretch 2: EXTRA CHALLENGE

Instead of displaying the date on the ToDo, implement a countdown of days left until the deadline. You can use the Javascript Date reference to accomplish this:
https://www.w3schools.com/jsref/jsref_obj_date.asp
