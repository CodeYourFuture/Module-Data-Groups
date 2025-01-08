// This function populates the todo list dynamically based on the provided todos array.
function populateTodoList(todos) {
  // Get the todo-list element (the <ul> element where todos will be displayed).
  let list = document.getElementById("todo-list");

  // Clear any existing todos in the list (if they exist in HTML initially).
  list.innerHTML = ""; // This ensures that the list is empty before repopulating it with updated todos.

  // Loop through each todo in the todos array.
  todos.forEach((todo) => {
    // Create a new <li> element for each todo item.
    const li = document.createElement("li");
    li.textContent = todo.task; // Set the text content of the <li> to the todo task.

    // Apply line-through if the todo is completed (this fixes the "completed status lost" issue).
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    // Create icons container
    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    // Create an 'i' element for the tick icon (mark as completed).
    const tick = document.createElement("i");
    tick.classList.add("fa", "fa-check", "icon"); // Add necessary classes for the tick icon.

    // Create an 'i' element for the trash icon (delete the todo).
    const trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "icon"); // Add necessary classes for the trash icon.

    // Append icons to span
    span.appendChild(tick);
    span.appendChild(trash);

    // Append span to li 
    li.appendChild(span);

    // Add event listener to the tick icon to toggle the completed status.
    tick.addEventListener("click", () => {
      todo.completed = !todo.completed; // Toggle the completed status.
      li.style.textDecoration = todo.completed ? "line-through" : "none"; // If completed, apply strikethrough style to the todo.
      populateTodoList(todos);
    });

    // Add event listener to the trash icon to delete the todo.
    trash.addEventListener("click", () => {
      // Filter out the deleted todo from the todos array.
      const updatedTodos = todos.filter((t) => t !== todo);

       // Update the global todos explicitly.
      todos.length = 0; // Clear the original array
      todos.push(...updatedTodos); // Push updated items back into the global array

      // Repopulate the todo list after deleting the todo.
      populateTodoList(todos);
    });

    // Append the <li> element (with both icons) to the todo list.
    list.appendChild(li);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

   // The todo list is now populated with the current todos, each having completed and delete buttons.
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// Initial todos array.
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// Populate the todo list on page load.
populateTodoList(todos);

// Add event listener directly to the "Add Todo" button.
const addTodoButton = document.querySelector("#add-todo");
addTodoButton.addEventListener("click", addNewTodo); // When the button is clicked, call the addNewTodo function.

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// This function adds a new todo item to the list based on the input field value.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  // Get the value of the input field.
  const inputField = document.querySelector("#todoInput");
  const inputFieldValue = inputField.value.trim(); // Remove any leading or trailing spaces.

  // If the input field is not empty, create a new todo item and add it to the todos array.
  if (inputFieldValue) {
    const newTodo = { task: inputFieldValue, completed: false }; // Create a new todo object.
    todos.push(newTodo); // Add the new todo to the todos array.
    populateTodoList(todos); // Repopulate the todo list with the updated todos array.
    inputField.value = ""; // Clear input field after adding a new todo.
  }
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// This function deletes all completed todos.
function deleteAllCompletedTodos() {
  // Write your code here...

  // Filter out all completed todos from the todos array.
  todos = todos.filter((todo) => !todo.completed); // Only keep todos that are not completed.
  // Repopulate the todo list with the updated todos array (without the completed ones).
  populateTodoList(todos);

}

// Attach the delete completed todos functionality to the "Remove All Completed" button.
const removeAllCompletedBtn = document.querySelector("#remove-all-completed");
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
