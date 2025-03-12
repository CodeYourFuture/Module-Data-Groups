let list = document.createElement(`ol`);
list.id = "todo-list";
document.body.appendChild(list);
function populateTodoList(todos) {
  todos.forEach((todo, index) => {
    // li
    const toDosList = document.createElement(`li`);
    toDosList.textContent = todo.task;
    if (todo.completed) {
      toDosList.style.textDecoration = `line-through`;
    }
    list.appendChild(toDosList);

    //completed button
    const completedBtn = document.createElement(`button`);
    completedBtn.textContent = `✔`;
    completedBtn.id = "completedBtn";
    completedBtn.addEventListener(`click`, () => {
      todo.completed = !todo.completed;
      toDosList.style.textDecoration = todo.completed ? `line-through` : ``;
    });

    //deleted button
    const deletedBtn = document.createElement(`button`);
    deletedBtn.textContent = `🗑️`;
    deletedBtn.id = "deletedBtn";

    deletedBtn.addEventListener(`click`, () => {
      todos.splice(index, 1);
      toDosList.remove();
    });
    toDosList.append(completedBtn, deletedBtn);
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
const input = document.querySelector(`input[type="text"]`);
const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector(`form`);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  event.preventDefault();
  if (input.value.trim() === ``) return alert(`Enter todo!`);
  const newTodo = { task: input.value, completed: false };
  todos.push(newTodo);

  const toDoList = document.createElement(`li`);
  toDoList.textContent = input.value;
  list.appendChild(toDoList);
  input.value = ``;

  const completedBtn = document.createElement(`button`);
  completedBtn.textContent = `✔`;
  completedBtn.addEventListener(`click`, () => {
    newTodo.completed = !newTodo.completed;
    toDoList.style.textDecoration = newTodo.completed ? `line-through` : ``;
  });

  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = `🗑️`;
  deleteBtn.addEventListener(`click`, () => {
    const index = todos.indexOf(newTodo);

    todos.splice(index, 1);
    toDoList.remove();
  });

  toDoList.append(completedBtn, deleteBtn);
}
form.addEventListener(`submit`, addNewTodo);

const removeAllTodosBtn = document.querySelector(`#remove-all-completed`);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const list = document.querySelectorAll(`li`);
  todos = todos.filter((todo) => !todo.completed);
  list.forEach((element) => {
    if (element.style.textDecoration === `line-through`) {
      element.remove();
    }
  });
}

removeAllTodosBtn.addEventListener(`click`, deleteAllCompletedTodos);
