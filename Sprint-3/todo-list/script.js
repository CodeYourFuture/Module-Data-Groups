const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let todos = []; // Application state

function populateTodoList() {
  listContainer.innerHTML = ""; // Clear existing list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-container">
        <img 
          src="assets/${todo.completed ? "checked.png" : "unchecked.png"}" 
          alt="Toggle status" 
          class="toggle-icon"
        >
        <span class="${todo.completed ? "checked" : ""} task-text">
          ${todo.text}
         </span> 
      </span>
        <img 
          src="assets/trash.png" 
          alt="Delete task" 
          class="delete-icon"
        >
    `;
    // Add event listener to the toggle icon
    li.querySelector(".toggle-icon").addEventListener("click", () => {
      toggleComplete(index);
    });

    // Add event listener to the delete icon
    li.querySelector(".delete-icon").addEventListener("click", () => {
      deleteTask(index);
    });

    listContainer.appendChild(li);
  });
}

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    todos.push({ text: inputBox.value, completed: false });
    inputBox.value = "";
    populateTodoList(); // Update the view
  }
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed; //  status
  populateTodoList(); // Re-render the list
}

function deleteTask(index) {
  todos.splice(index, 1); // Remove the task from the array
  populateTodoList(); // Re-render the list
}

populateTodoList();
