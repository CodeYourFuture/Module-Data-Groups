// Store everything imported from './todos.mjs' module as properties of an object named Todos
import * as Todos from "./todos.mjs";

// To store the todo tasks
const todos = [];

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);
  // Populate sample data
  Todos.addTask(todos, "Wash the dishes", false, null);
  Todos.addTask(todos, "Do the shopping", true, null);

  render();
});

document
  .getElementById("delete-completed-btn")
  .addEventListener("click", () => {
    Todos.deleteCompleted(todos);
    render();
  });

// A callback that reads the task description and deadline date from input fields and
// append a new task to the todo list.
function addNewTodo() {
  const taskInput = document.getElementById("new-task-input");
  const deadlineDateInput = document.getElementById("deadline-date");
  const task = taskInput.value.trim();
  const deadlineDate = deadlineDateInput.value;
  if (task) {
    Todos.addTask(todos, task, false, deadlineDate);
    render();
  }

  taskInput.value = "";
  deadlineDateInput.value = "";
}

// Get today's date and convert it to YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Set the 'min' attribute so past dates are unclickable
document.getElementById("deadline-date").setAttribute("min", today);

// Note:
// - Store the reference to the <ul> element with id "todo-list" here
//   to avoid querying the DOM repeatedly inside render().
// - This variable is declared here to be close to the only function that uses it.
const todoListEl = document.getElementById("todo-list");

// Render the whole todo list
function render() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}

// Note:
// - First child of #todo-item-template is a <li> element.
//   We will create each ToDo list item as a clone of this node.
// - This variable is declared here to be close to the only function that uses it.
const todoListItemTemplate =
  document.getElementById("todo-item-template").content.firstElementChild;

// Create a <li> element for the given todo task
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".description").textContent = todo.task;
  if (todo.deadlineDate != null)
    li.querySelector(".deadline-date-li").textContent = todo.deadlineDate;

  if (todo.completed) {
    li.classList.add("completed");
  }

  li.querySelector(".complete-btn").addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    render();
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    render();
  });

  return li;
}
