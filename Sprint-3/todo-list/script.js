// Initial list of todos
const todos = [
  { text: "Wash the dishes", completed: false },
  { text: "Do the shopping", completed: false },
];

// Function to render the todo list
function populateTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Clear existing list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.className = todo.completed ? "completed" : "";

    // Mark as completed button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = todo.completed ? "Uncomplete" : "Complete";
    completeBtn.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addNewTodo(event) {
  event.preventDefault();
  const input = document.getElementById("todo-input");
  const newTodoText = input.value.trim();

  if (newTodoText) {
    todos.push({ text: newTodoText, completed: false });
    input.value = ""; // Clear input field
    populateTodoList(); // Re-render the list
  }
}

// Function to delete all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed); // Remove completed todos
  populateTodoList(); // Re-render the list
}

// Add event listeners
document.getElementById("todo-form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

// Initial population of the todo list
populateTodoList();
