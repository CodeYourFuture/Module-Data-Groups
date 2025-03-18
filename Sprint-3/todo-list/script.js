//i create a function to populate the todo and display it.
function populateTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; //to prevent repeating the output in my ul
  //loop through todos and create the list
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.textContent = todo.task;
    //apply red color if task is completed
    if (todo.completed) {
      todoText.style.textDecoration = "line-through"; //change text decoration to line through if completed
    }
    li.appendChild(todoText);
    const badge = document.createElement("span"); //badge icons
    badge.classList.add("badge", "bg-primary", "rounded-pill");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check"); //check icon
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.addEventListener("click", () => toggleComplete(index, todoText));
    badge.appendChild(checkIcon);
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash"); //trash icon
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", () => deleteTodo(index));
    badge.appendChild(trashIcon);
    li.appendChild(badge);
    todoList.appendChild(li);
  });
}
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

//function for completed task
function toggleComplete(index, todoText) {
  todos[index].completed = !todos[index].completed;

  if (todos[index].completed) {
    todoText.style.textDecoration = "line-through"; //change text decoration to line through if completed
  } else {
    todoText.style.textDecoration = "none"; //change text decoration to none.
  }

  populateTodoList();
}

// function to delete task
function deleteTodo(index) {
  todos.splice(index, 1); // Remove the todo from the array
  populateTodoList();
}

//adding the todos from input
function addNewTodo(event) {
  event.preventDefault(); //to prevent refreshing the page during submitting the form
  const inputText = document.getElementById("input-text").value.trim(); //i trim it to prevent spaces at start and end.
  if (inputText !== "") {
    todos.push({ task: inputText, completed: false }); //add the new todo
    document.getElementById("input-text").value = ""; //clear input
    populateTodoList(); // Re-render the todo list
  }
}

// Function to remove all completed todos
function removeAllCompleted() {
  todos = todos.filter((todo) => !todo.completed); //returning filter of the ones with todo.completed false which means not completed.
  populateTodoList();
}
//eventlistener for my addtodo and clearcompleted buttons
document.getElementById("submit-btn").addEventListener("click", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", removeAllCompleted);
// Initial population of the todo list
populateTodoList(); // calling my function to work
