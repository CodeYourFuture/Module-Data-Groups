let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

let done = [];

function populateTodoList() {
  const todoList = document.getElementById("todo-list");
  const completedList = document.getElementById("completed-todo-list");

  // Clearing the existing list items
  todoList.innerHTML = "";
  completedList.innerHTML = "";

  // Function to create list items
  function createListItem(todo, index, isCompleted) {
    const listItem = document.createElement("li");
    listItem.className = 'todo-item';

    // Creating the text node for the task
    const taskText = document.createTextNode(todo.task);
    listItem.appendChild(taskText);

    // Creating Span container for the buttons
    const buttonContainer = document.createElement("span");
    buttonContainer.className = 'inner-button-container';

    // Creating the complete/uncomplete button
    const completeButton = document.createElement("button");
    completeButton.textContent = isCompleted ? 'Incomplete ❌' : 'Complete ✔️';
    completeButton.onclick = () => toggleComplete(index, isCompleted);
    buttonContainer.appendChild(completeButton);

    // Creating the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete 🗑️';
    deleteButton.onclick = () => deleteTask(index, isCompleted);
    buttonContainer.appendChild(deleteButton);

    // Append the button container to the list item
    listItem.appendChild(buttonContainer);

    return listItem;
  }
  
  // Populate the todo list with incomplete tasks
  todos.forEach((todo, index) => {
    const listItem = createListItem(todo, index, false);
    todoList.appendChild(listItem);
  });
  
  // Populate the completed list with completed tasks
  done.forEach((todo, index) => {
    const listItem = createListItem(todo, index, true);
    completedList.appendChild(listItem);
  });
}
//Creating paragraph depending on the list
function createParagraph() {
  const todoList = document.getElementById("todo-list");
  const completedList = document.getElementById("completed-todo-list");

  if (completedList.hasChildNodes()) {
    const doneParagraph = document.createElement("p");
    doneParagraph.textContent = "Completed Tasks";
    completedList.insertBefore(doneParagraph, completedList.firstChild);
  }

  if (todoList.hasChildNodes()) {
    const todoParagraph = document.createElement("p");
    todoParagraph.textContent = "To Do Tasks";
    todoList.insertBefore(todoParagraph, todoList.firstChild);
  }
}
function toggleComplete(index, isCompleted) {
  if (isCompleted) {
    // Move from done to todos
    const [task] = done.splice(index, 1);
    task.completed = false;
    todos.push(task);
  } else {
    // Move from todos to done
    const [task] = todos.splice(index, 1);
    task.completed = true;
    done.push(task);
  }
  populateTodoList();
  createParagraph();
}

function deleteTask(index, isCompleted) {
  if (isCompleted) {
    done.splice(index, 1);
  } else {
    todos.splice(index, 1);
  }
  populateTodoList();
  createParagraph();
}

function addNewTodo(event) {
  event.preventDefault();

  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  if (task) {
    todos.push({ task, completed: false });
    taskInput.value = "";
    populateTodoList();
    createParagraph();
  }
}

function deleteAllCompletedTodos() {
  done = [];
  populateTodoList();
  createParagraph();
}

document.getElementById('todo-form').addEventListener('submit', addNewTodo);
document.getElementById('remove-all-completed').addEventListener('click', deleteAllCompletedTodos);

// Initial population of the todo list
populateTodoList();
createParagraph();
