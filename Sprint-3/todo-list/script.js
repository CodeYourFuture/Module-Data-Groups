function populateTodoList(todo) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = ""; // clear the existing ul in the html.

  todos.forEach((todo) => {
    let listItem = document.createElement("li");
    listItem.textContent = todo.task;
    list.appendChild(listItem);

    let checkbox = document.createElement("input"); // creating a checkbox element.
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed; // checked the completed property in todos.
    checkbox.addEventListener("change", (event) => {
      todo.completed = event.target.checked;
      listItem.style.textDecoration = todo.completed ? "line-through" : "none";

      let checkIcons = document.createElement("i");
      checkIcons.classList.add("fa", "fa-check");
      listItem.appendChild(checkIcons);
    });
    listItem.appendChild(checkbox);

    let deleteButton = document.createElement("button"); // creating a delete button element.
    deleteButton.textContent = "Delete";
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    deleteButton.appendChild(trashIcon);

    let iconSpan = document.createElement("span");
    iconSpan.classList.add("badge", "bg-primary", "rounded-pill");
    iconSpan.appendChild(trashIcon);
    deleteButton.appendChild(iconSpan);

    deleteButton.addEventListener("click", () => {
      let indexTodo = todos.indexOf(todo);
      if (indexTodo !== -1) {
        todos.splice(indexTodo, 1);
        populateTodoList(todos);
      }
    });
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
  });
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let inputTodo = document.getElementById("todoInput");
  let taskInput = inputTodo.value.trim();

  if (taskInput) {
    todos.push({ task: taskInput, completed: false });
    populateTodoList(todos);
    inputTodo.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here....
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

const addTodoButton = document.getElementById("todo-btn");
addTodoButton.addEventListener("click", addNewTodo);

const removeCompletedTodosButton = document.getElementById(
  "remove-all-completed"
);
removeCompletedTodosButton.addEventListener("click", deleteAllCompletedTodos);

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
