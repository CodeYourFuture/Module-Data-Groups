function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  
  // Clear existing todos
  list.innerHTML = "";
  
  // Add each todo to the list
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    
    // Apply line-through style if completed
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }
    
    // Create tick icon
    const tickIcon = document.createElement("i");
    tickIcon.className = "fas fa-check";
    tickIcon.addEventListener("click", function() {
      // Toggle line-through style
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        todo.completed = false;
      } else {
        li.style.textDecoration = "line-through";
        todo.completed = true;
      }
    });
    
    // Create bin/trash icon
    const binIcon = document.createElement("i");
    binIcon.className = "fas fa-trash";
    binIcon.addEventListener("click", function() {
      // Remove the todo item from the list
      li.remove();
      // Remove from the todos array
      todos = todos.filter(t => t !== todo);
    });
    
    // Append icons to the list item
    li.appendChild(tickIcon);
    li.appendChild(binIcon);
    
    // Append the list item to the list
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
  
  // Get input value
  const inputField = document.getElementById("todoInput");
  const taskValue = inputField.value.trim();
  
  if (taskValue) {
    // Add new todo to the array
    const newTodo = { task: taskValue, completed: false };
    todos.push(newTodo);
    
    // Update the list
    populateTodoList(todos);
    
    // Clear the input field
    inputField.value = "";
  }
}

// Add event listener for the form submission
document.querySelector("form").addEventListener("submit", addNewTodo);

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Filter out completed todos
  todos = todos.filter(todo => !todo.completed);
  
  // Update the list
  populateTodoList(todos);
}

// Add event listener for the remove all completed button
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
