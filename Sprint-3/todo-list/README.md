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

Run the following command in this directory to install all required dependencies: 
```
  npm install
```
> This will install
- `jest` - for running unix test
- `http-server` - for serving `index.html` over HTTP
 
**Note:** If you are using a Windows CLI, replace `package.json` by `package.json-windows`.

## Running the App 

Since the app uses **ES modules**, the HTML file **must be loaded via HTTP/HTTPS** rather than
directly from the file system.

Make sure you run the server in this directory where `index.html` is located.

Two possible ways to serve `index.html` over HTTP:

#### Option 1: `http-server`

1. Run 
   ```
   npm run serve
   ```
   > Here, `serve` is a shortcut defined in `package.json` for running `http-server`.
  
  
2. Open one of the URLs shown in the terminal (e.g., `http://127.0.0.1:8080`).


#### Option 2: Open `index.html` with Live Server in VSCode.


## Understanding how the code is organized as ES modules

- [What is ES Modules?](00-what_is_ES_modules.md)
- [How to use ES modules with Node.js and Jest?](01-using_esm_with_nodejs_and_jest.md)
- [A guide to modularize a web app](02-guide_to_modularize_code.md)

---

## Exercise Instructions

In this exercise, your objective is to extend the ToDo app by implementing new features. 
Start with the main feature and then try the stretch goals if you have extra time.

### Main Feature: Mass delete of completed ToDos

Add a button that deletes all completed tasks at once.

Steps:
1. In `index.html`, add a "Delete completed tasks" button.

2. In `todos.mjs`, implement a function `deleteCompleted(todoList)` that removes all completed 
   ToDos from the given list.

3. In `todos.test.mjs`, write a Jest test that verifies `deleteCompleted()` works correctly.

4. In `script.js`, call `deleteCompleted()` whenever the new button is clicked.
    - ⚠️ You should not need to modify the `render()` function.

### Stretch 1: Add deadlines for ToDos

Allow users to set and view deadlines for their tasks.
    - When creating a ToDo, let the user select a deadline using an HTML **datepicker** input.
    - If no date is selected, the ToDo has **no deadline**.
    - When rendering a ToDo in the list, display the deadline only if it exists.

### Stretch 2: Extra Challenge – Show time remaining

Instead of showing the deadline as a date, display how many days are left until the 
deadline (relative to today).
    - Decide how overdue ToDos should be handled and then implement your chosen solution.

👉 Hint: You can use the [JavaScript Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
to calculate the difference.



