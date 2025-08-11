// GLOBAL todos array
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear the list first

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo.task;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash ms-2";
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      todos.splice(todos.indexOf(todo), 1);
      populateTodoList(todos);
    });

    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);
    list.appendChild(li);
  });
}

populateTodoList(todos);

// Add new todo
function addNewTodo(event) {
  event.preventDefault();
  const input = document.querySelector("input[type='text']");
  const task = input.value.trim();
  if (task !== "") {
    todos.push({ task, completed: false });
    input.value = "";
    populateTodoList(todos);
  }
}

document.querySelector("form").addEventListener("submit", addNewTodo);

// Remove all completed
document
  .getElementById("remove-all-completed")
  .addEventListener("click", () => {
    todos = todos.filter((todo) => !todo.completed);
    populateTodoList(todos);
  });
