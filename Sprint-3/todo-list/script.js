const removeAllButton = document.getElementById("remove-all-completed"),
  addNewTodoButton = document.querySelector("add-todo"),
  form = document.getElementById("todo-form");

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    newTodo = document.createElement("li");
    newTodo.innerHTML = `<span class="badge bg-primary rounded-pill">${item.task}
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
    </span>
    <button class="status">DONE</button>
    <button class="delete">DELETE</button>`;
    // newTodo.style.textDecoration = "line-through";
    list.append(newTodo);
  });
}
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  const input = document.querySelector(".input");
  if (input.value) {
    newTodo = document.createElement("li");
    newTodo.innerHTML = `<span class="badge bg-primary rounded-pill">${input.value}
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
    </span>
    <button class="status">DONE</button>
    <button class="delete">DELETE</button>`;
    // newTodo.style.textDecoration = "line-through";
    const list = document.getElementById("todo-list");
    list.append(newTodo);

    form.reset();
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones.
function deleteAllCompletedTodos() {
  let list = document.querySelectorAll("li");
  list.forEach((todo) => {
    if (todo.classList.contains("done")) {
      todo.remove();
    }
  });
}

const statusButtons = document.querySelectorAll(".status"),
  deleteButtons = document.querySelectorAll(".delete");

form.addEventListener("submit", (e) => {
  addNewTodo(e);
});
removeAllButton.addEventListener("click", deleteAllCompletedTodos);


let list = document.getElementById("todo-list");

list.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('status')) {
    const todoItem = e.target.closest("li");
    if (todoItem.classList.contains('done')) {
      todoItem.classList.remove("done");
      e.target.textContent = "DONE";
    } else {
      todoItem.classList.add("done");
      e.target.textContent = "UNDO";
    }
  } else if (e.target && e.target.classList.contains("delete")) {
    const todoItem = e.target.closest("li");
    todoItem.remove();
  }
});


