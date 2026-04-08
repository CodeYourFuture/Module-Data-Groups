// Store everything imported from './todos.mjs' module as properties of an object named Todos
import * as Todos from "./todos.mjs";

// To store the todo tasks
const todos = [];

// Store DOM references after page load
let todoListEl;
let todoListItemTemplate;

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  todoListEl = document.getElementById("todo-list");
  todoListItemTemplate =
    document.getElementById("todo-item-template").content.firstElementChild;

  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);
  document.getElementById("delete-completed-btn").addEventListener("click", removeCompletedTodos);

  // Populate sample data
  Todos.addTask(todos, "Wash the dishes", false);
  Todos.addTask(todos, "Do the shopping", true);

  render();
});

// A callback that reads the task description from an input field and
// append a new task to the todo list.
function addNewTodo() {
  const taskInput = document.getElementById("new-task-input");
  const task = taskInput.value.trim();

  if (task) {
    Todos.addTask(todos, task, false);
    render();
  }

  taskInput.value = "";
}

// Remove all completed tasks
function removeCompletedTodos() {
  Todos.deleteCompleted(todos);
  render();
}

// Render the whole todo list
function render() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}

// Create a <li> element for the given todo task
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true);

  li.querySelector(".description").textContent = todo.task;

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