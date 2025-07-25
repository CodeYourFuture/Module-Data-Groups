function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerText = todo.task;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    const checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check mx-1";
    checkBtn.style.cursor = "pointer";
    checkBtn.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    const trashBtn = document.createElement("i");
    trashBtn.className = "fa fa-trash mx-1";
    trashBtn.style.cursor = "pointer";
    trashBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    span.appendChild(checkBtn);
    span.appendChild(trashBtn);
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
  const input = document.querySelector("input");
  const newTask = input.value.trim();
  if (newTask !== "") {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos);
    input.value = "";
  }
}

document.querySelector("form").addEventListener("submit", addNewTodo);

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
