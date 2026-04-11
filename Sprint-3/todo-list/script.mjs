// Import all exported functions from todos.mjs
import * as Todos from "./todos.mjs";

// Store todo tasks here
const todos = [];

// Cache DOM elements so we do not query the DOM repeatedly
const todoListEl = document.getElementById("todo-list");
const newTaskInputEl = document.getElementById("new-task-input");
const deadlineInputEl = document.getElementById("deadline-input");
const addTaskButtonEl = document.getElementById("add-task-btn");
const deleteCompletedButtonEl = document.getElementById("delete-completed-btn");

// Template for each todo list item
const todoListItemTemplate =
  document.getElementById("todo-item-template").content.firstElementChild;

// Set up the app when the page loads
window.addEventListener("load", () => {
  addTaskButtonEl.addEventListener("click", addNewTodo);
  deleteCompletedButtonEl.addEventListener("click", deleteCompletedTodos);

  // Hardcoded sample tasks shown on page load
  Todos.addTask(todos, "Wash the dishes", false, "");
  Todos.addTask(todos, "Do the shopping", true, "2026-03-24");
  Todos.addTask(todos, "Prepare for Saturday class", false, "2026-03-26");

  render();
});

/**
 * Reads input values and adds a new todo to the list.
 */
function addNewTodo() {
  const task = newTaskInputEl.value.trim();
  const deadline = deadlineInputEl.value;

  // Do not add empty tasks
  if (!task) {
    return;
  }

  Todos.addTask(todos, task, false, deadline);
  render();

  // Clear inputs after adding
  newTaskInputEl.value = "";
  deadlineInputEl.value = "";
}

/**
 * Deletes all completed todos.
 */
function deleteCompletedTodos() {
  Todos.deleteCompletedTasks(todos);
  render();
}

/**
 * Clears and rebuilds the todo list from the current todos array.
 */
function render() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}

/**
 * Creates one <li> element for a given todo.
 */
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true);

  const descriptionEl = li.querySelector(".description");
  const deadlineEl = li.querySelector(".deadline");
  const completeButtonEl = li.querySelector(".complete-btn");
  const deleteButtonEl = li.querySelector(".delete-btn");

  descriptionEl.textContent = todo.task;

  // Show deadline if one exists
  if (todo.deadline) {
    deadlineEl.textContent = `Deadline: ${todo.deadline}`;
  }

  // Show completed state
  if (todo.completed) {
    li.classList.add("completed");
    completeButtonEl.textContent = "✅";
  } else {
    completeButtonEl.textContent = "☑";
  }

  // Toggle task completion
  completeButtonEl.addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    render();
  });

  // Delete individual task
  deleteButtonEl.addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    render();
  });

  return li;
}
