// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// }

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);

// // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// // Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }



let todos = [
  { task: "Wash the dishes", completed: false, deadline: "2024-12-20" },
  { task: "Do the shopping", completed: false, deadline: "2024-12-25" },
];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ''; 

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    let taskSpan = document.createElement("span");
    taskSpan.textContent = todo.task;
    if (todo.completed) 
      taskSpan.classList.add("completed");
    

    let deadlineSpan = document.createElement("span");
    if (todo.deadline) 
      deadlineSpan.textContent = ` (Deadline: ${todo.deadline})`;

    let badge = document.createElement("span");
    badge.classList.add("badge", "bg-primary", "rounded-pill");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function() {
      todo.completed = checkBox.checked;
      taskSpan.classList.toggle("completed", todo.completed);
    });

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa", "fa-trash");
    deleteBtn.addEventListener("click", function() {
      todos.splice(index, 1);
      populateTodoList(todos); 
    });

    badge.appendChild(checkBox);
    badge.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(deadlineSpan);
    li.appendChild(badge);
    list.appendChild(li);
  });
}


function addNewTodo(event) {
  event.preventDefault(); 

  let taskInput = document.getElementById("new-todo-text");
  let deadlineInput = document.getElementById("new-todo-deadline");

  let task = taskInput.value.trim();
  let deadline = deadlineInput.value || null;

  if (task) {
    todos.push({ task, completed: false, deadline });
    populateTodoList(todos); 
  }

  taskInput.value = '';
  deadlineInput.value = ''; 
}

function deleteAllCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
  populateTodoList(todos); 
}

