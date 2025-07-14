// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let addNewTodoBtn = document.getElementById("add-new-todo");
let removeAllCompletedBtn = document.getElementById("remove-all-completed");
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
let inputField = document.getElementById("task-input");

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(todo => {
    createTodo(todo)
  });
}

function createTodo(todo){
  let list = document.getElementById("todo-list");
  let todoItem = document.createElement("li");

  let text = document.createElement("p");
  text.textContent = todo.task;
  if (todo.completed){
    todoItem.setAttribute("class", "completed");
  }
  todoItem.appendChild(text);

  let completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "completeBtn");
  completeBtn.textContent = "Complete";
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.textContent = "Delete";
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);

  list.appendChild(todoItem);
  completeBtn.addEventListener("click", () => {
    text.style.textDecoration = 'line-through';
    todoItem.setAttribute("class", "completed")
  });
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let taskText = inputField.value;
  inputField.value = '';
  let todo = {task: taskText, completed: false}
  createTodo(todo);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list");
  let todosElements = list.children;
  for (let i = 0; i < todosElements.length; i++){
    if (todosElements[0].classList.contains("completed")){
      todosElements[0].remove();
    }
  }
}

addNewTodoBtn.addEventListener("click", function(event){
  addNewTodo(event);
});
removeAllCompletedBtn.addEventListener("click", () => {
  deleteAllCompletedTodos();
});
populateTodoList(todos);