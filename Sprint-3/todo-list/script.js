const addNewTodoButton = document.getElementById("add-new-todo"),
  removeAllCompletedButton = document.getElementById("remove-all-completed"),
  inputDom = document.getElementById("task-input"),
  listDom = document.getElementById("todo-list");

addNewTodoButton.addEventListener("click", function (event) {
  addNewTodo(event);
  inputDom.value = '';
});

function populateTodoList(todos) {
  for (const todo of todos) {
    createNewTodoDom(todo);
  }

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
  const todo = { task: inputDom.value, completed: false };
  todos.push(todo);
  createNewTodoDom(todo);
}

function createNewTodoDom(todo) {
  const todoLiDom = document.createElement("li"),
    entryTextDom = document.createElement("p");
  if (todo.completed) {
    todoLiDom.setAttribute("class", "completed");
  }
  todoLiDom.appendChild(entryTextDom);
  entryTextDom.textContent = todo.task;
  listDom.appendChild(todoLiDom);

  const completeButton = document.createElement("button");
  completeButton.setAttribute("class", "completeBtn");
  completeButton.textContent = "Complete";
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteBtn");
  deleteButton.textContent = "Delete";
  todoLiDom.appendChild(completeButton);
  todoLiDom.appendChild(deleteButton);

  completeButton.addEventListener("click", () => {
    entryTextDom.style.textDecoration = 'line-through';
    todoLiDom.setAttribute("class", "completed")
  });
  deleteButton.addEventListener("click", () => {
    todoLiDom.remove();
  });
}

removeAllCompletedButton.addEventListener("click", () => {
  deleteAllCompletedTodos();
});

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const activeListElements = listDom.children;
  for (const item of activeListElements) {
    if (item.classList.contains("completed")) {
      item.remove();
    }
  }
}
