const removeAllButton = document.getElementById("remove-all-completed");
const form = document.getElementById("todo-form");
const input = document.querySelector(".input");
const todoList = document.getElementById("todo-list");

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// Populate the todo list with initial tasks
function populateTodoList(todos) {
  todos.forEach((item) => {
    addTodoToDOM(item.task, item.completed);
  });
}

// Add todo item to the DOM
function addTodoToDOM(task, completed = false) {
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  if (completed) newTodo.classList.add("done");
  newTodo.innerHTML = `
    <span class="badge bg-primary rounded-pill">${task}</span>
    <button class="status">${completed ? "UNDO" : "DONE"}</button>
    <button class="delete">DELETE</button>
  `;
  todoList.appendChild(newTodo);
}

// Add new todo from the input field
function addNewTodo(event) {
  event.preventDefault();

  const taskValue = input.value.trim();
  if (taskValue) {
    addTodoToDOM(taskValue);
    form.reset();
  }
}

// Delete all completed todos
function deleteAllCompletedTodos() {
  const completedTodos = document.querySelectorAll(".todo-item.done");
  completedTodos.forEach((todo) => todo.remove());
}


todoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("status")) {
    const todoItem = target.closest("li");
    if (todoItem.classList.contains("done")) {
      todoItem.classList.remove("done");
      target.textContent = "DONE";
    } else {
      todoItem.classList.add("done");
      target.textContent = "UNDO";
    }
  }

  if (target.classList.contains("delete")) {
    const todoItem = target.closest("li");
    todoItem.remove();
  }
});

form.addEventListener("submit", addNewTodo);
removeAllButton.addEventListener("click", deleteAllCompletedTodos);

populateTodoList(todos);
