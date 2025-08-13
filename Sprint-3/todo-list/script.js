function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.textContent = todo.task;
    li.className = `list-group-item ${todo.completed ? "completed" : ""}`;

    let span = document.createElement("span");
    span.className = "badge bg-light rounded-pill";

    let checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check todo-icon";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.classList.toggle("completed");
    });

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash todo-icon";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", () => {
      const index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1);
      }
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

function addNewTodo(event) {
  event.preventDefault();
  let input = document.getElementById("todoInput");
  let newTask = input.value.trim();

  if (/[^A-Za-z\s]/.test(newTask)) {
    alert("Please enter letters and spaces only.");
    input.value = "";
    return;
  }

  if (newTask !== "") {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos);
    input.value = "";
  }
}
populateTodoList(todos);

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

document.getElementById("todo-form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
