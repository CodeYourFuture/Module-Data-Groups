// script.js

// Initial list of todos
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false }
];

// Main function to populate the ToDo list in the DOM
function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing list

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo.task;

    // Add line-through if completed
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    // Create span to hold action icons
    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    // Check icon to toggle completion
    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check mx-1";
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    // Trash icon to delete todo
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash mx-1";
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo);
      populateTodoList(todos);
    });

    // Append icons to span, and span to list item
    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);

    list.appendChild(li);
  });
}

// Adds a new todo from the input field
function addNewTodo(event) {
  event.preventDefault();
  const input = document.querySelector("input[type='text']");
  const newTask = input.value.trim();
  if (newTask !== "") {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos);
    input.value = "";
  }
}

// Deletes all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

// Event listeners for buttons
const form = document.querySelector("form");
form.addEventListener("submit", addNewTodo);
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);

// Initial population of list
populateTodoList(todos);