function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear any existing todos in the HTML.

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = todo.task;

    // Add strike-through if task is already completed
    if (todo.completed) {
      listItem.style.textDecoration = "line-through";
    }

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";

    // Add check icon
    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      listItem.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    // Add trash icon
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    badge.appendChild(checkIcon);
    badge.appendChild(trashIcon);
    listItem.appendChild(badge);
    list.appendChild(listItem);
  });
}

// These are the same todos that currently display in the HTML
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// Function to add a new ToDo
function addNewTodo(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page.
  const input = document.getElementById("todoInput");
  const newTask = input.value.trim(); // Trim to remove extra spaces.

  if (newTask) {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos); // Re-render the list with the new todo.
    input.value = ""; // Clear the input field.
  }
}

// Advanced: Function to delete all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed); // Remove completed todos from the array.
  populateTodoList(todos); // Re-render the list with only incomplete todos.
}

// Advanced: Add deadline functionality
function addDeadline(todo, deadline) {
  const dateSpan = document.createElement("span");
  dateSpan.className = "deadline text-muted ms-2";
  dateSpan.innerText = deadline ? ` (Due: ${deadline})` : "";
  return dateSpan;
}

// Listen for form submission to add new todos
document.getElementById("add-todo-form").addEventListener("submit", addNewTodo);

// Button to delete all completed todos
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);

