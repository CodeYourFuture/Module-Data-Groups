function toggleTodoCompletion(todo) {
  todo.completed = !todo.completed;
}

function removeTodo(todos, todo) {
  return todos.filter((t) => t !== todo);
}

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

function createTodoElement(todo, todos) {
  let li = document.createElement("li");
  li.textContent = todo.task;
  li.className = `list-group-item ${todo.completed ? "completed" : ""}`;

  let span = document.createElement("span");
  span.className = "badge bg-light rounded-pill";

  let checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check todo-icon";
  checkIcon.setAttribute("aria-hidden", "true");
  checkIcon.addEventListener("click", () => {
    toggleTodoCompletion(todo);
    li.classList.toggle("completed");
  });

  let trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash todo-icon";
  trashIcon.setAttribute("aria-hidden", "true");
  trashIcon.addEventListener("click", () => {
    todos = removeTodo(todos, todo);
    populateTodoList(todos);
  });

  span.appendChild(checkIcon);
  span.appendChild(trashIcon);
  li.appendChild(span);

  return li;
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo) => {
    list.appendChild(createTodoElement(todo, todos));
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function addNewTodo(event) {
  event.preventDefault();
  let input = document.getElementById("todoInput");
  let newTask = input.value.trim();

  if (newTask === "") {
    alert("Input field cannot be empty.");
    return;
  }

  if (/[^A-Za-z\s]/.test(newTask)) {
    alert("Please enter letters and spaces only.");
    input.value = "";
    return;
  }

  todos.push({ task: newTask, completed: false });
  populateTodoList(todos);
  input.value = "";
}

document.getElementById("add-btn").addEventListener("click", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

populateTodoList(todos);