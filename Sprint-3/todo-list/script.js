function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo.task;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    let checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check me-2";
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;

      populateTodoList(todos);
    });

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      todos = todos.filter((currentTodo) => currentTodo !== todo);

      populateTodoList(todos);
    });

    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);
    list.appendChild(li);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  let inputField = document.querySelector("input[type='text']");
  let taskText = inputField.value.trim();
  if (taskText !== "") {
    todos.push({ task: taskText, completed: false });
    populateTodoList(todos);
    inputField.value = "";
  }
}

document.querySelector("form").addEventListener("submit", addNewTodo);

document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
