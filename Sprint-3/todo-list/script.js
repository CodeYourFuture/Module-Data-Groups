let todos = JSON.parse(localStorage.getItem("todos")) || [];

populateTodoList(todos);

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // resets content
  todos.forEach((todo, _) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    list.appendChild(li);

    const tickIcon = document.createElement("i");
    const binIcon = document.createElement("i");

    tickIcon.classList.add("fa", "fa-check", "icon");
    binIcon.classList.add("fa", "fa-trash", "icon");

    li.appendChild(tickIcon);
    li.appendChild(binIcon);

    tickIcon.addEventListener("click", () => {
      toggleTodoCompletion(todo, li);
    });

    binIcon.addEventListener("click", () => {
      deleteTodoFromList(todo);
    });
  });
}

function toggleTodoCompletion(todo, li) {
  todo.completed = !todo.completed;
  li.style.textDecoration = todo.completed ? "line-through" : "none";
  updateLocalStorage();
}

function deleteTodoFromList(todo) {
  const todoIndex = todos.indexOf(todo);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    updateLocalStorage();
    populateTodoList(todos);
  }
}

function addNewTodo(event) {
  event.preventDefault();
  const inputField = event.target.querySelector("#todoInput");
  const inputFieldValue = inputField.value.trim();
  if (inputFieldValue) {
    const newTodo = { task: inputFieldValue, completed: false };
    todos.push(newTodo);
    updateLocalStorage();
    populateTodoList(todos);
    inputField.value = "";
  }
}

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  updateLocalStorage();
  populateTodoList(todos);
}

// Helper function to update local storage
function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const removeAllCompletedBtn = document.querySelector("#remove-all-completed");
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
