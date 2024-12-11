function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.innerText = todo.task;

    if (todo.completed) {
      span.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.className = "btn-complete";
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.innerText = todo.task;

    if (todo.completed) {
      span.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.className = "btn-complete";
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.querySelector("input[type='text']");
  const newTask = input.value.trim();
  if (newTask.length > 0) {
    const newTodo = { task: newTask, completed: false };
    todos.push(newTodo);
    populateTodoList(todos);
    input.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const list = document.getElementById("todo-list");
  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    const span = item.querySelector("span");
    if (span && span.classList.contains("completed")) {
      item.remove();
    }
  });
}
document.querySelector("form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
