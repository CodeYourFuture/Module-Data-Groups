function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    
    let textContent = todo.task;
    if (todo.deadline) {
      const deadline = new Date(todo.deadline);
      const today = new Date();
      const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
      const countdownText = diffDays >= 0 ? `(${diffDays} days left)` : `(Overdue)`;
      textContent += ` - Due: ${todo.deadline} ${countdownText}`;
    }
    li.textContent = textContent;

    let badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";

    let checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
    });

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      list.removeChild(li);
    });

    badge.appendChild(checkIcon);
    badge.appendChild(trashIcon);
    li.appendChild(badge);
    list.appendChild(li);
  });  
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false, deadline: "2024-12-31" },
  { task: "Do the shopping", completed: false, deadline: "2024-12-25" },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let todoInput = document.getElementById("todo-input");
  let task = todoInput.value;
  let todoDeadline = document.getElementById("todo-deadline");
  let deadline = todoDeadline.value;


  if (task.trim() !== "") {
    todos.push({ task: task, completed: false, deadline: deadline || null });
    populateTodoList(todos);
    todoInput.value = "";
    todoDeadline.value = "";
  }
}

let addTodoButton = document.getElementById("add-todo");
addTodoButton.addEventListener("click", addNewTodo);

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => {
    let listItems = Array.from(document.getElementById("todo-list").children);
    let matchedItem = listItems.find((li) => li.textContent.includes(todo.task));
    return matchedItem && matchedItem.style.textDecoration !== "line-through";
  });
  populateTodoList(todos);
}

let deleteCompletedButton = document.getElementById("remove-all-completed");
deleteCompletedButton.addEventListener("click", deleteAllCompletedTodos);