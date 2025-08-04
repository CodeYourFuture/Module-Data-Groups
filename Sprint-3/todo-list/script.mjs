// Note: Todos will be an object containing all the named exports from
// the "./todos.mjs" module.
import * as Todos from "./todos.mjs";

// To store the todo tasks
let todos = [];

// First child of #todo-item-template is a <li> element.
// We will create each ToDo list item as a clone of this node.
const todoListItemTemplate = 
  document.getElementById("todo-item-template").content.firstElementChild;

const todoListEl = document.getElementById("todo-list");


window.addEventListener("load", () => {
  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);

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
  const li = todoListItemTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".description").textContent = todo.task;
  if (todo.completed)
    li.classList.add("completed");

  li.querySelector('.complete-btn').addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    render();
  });
    
  li.querySelector('.delete-btn').addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    render();
  });

  return li;
}