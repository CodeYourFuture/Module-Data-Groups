const form = document.querySelector('form');
const addBtn = document.getElementById('addBtn');
const removeBtn  = document.getElementById('remove-all-completed');
let list = document.getElementById('todo-list');
let inputEl = document.getElementById('input');

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = ''
  
  todos.forEach((todo, index) => {
    let listItem = document.createElement('li');
    listItem.className = "list-item";
    listItem.textContent = todo.task;

    if(todo.completed) {
      listItem.classList.add('completed');
    }

    let span = document.createElement('span');
    span.classList = 'btnContainer';

    let markBtnComplete = document.createElement('i');
    markBtnComplete.className = 'fa fa-check';
    markBtnComplete.setAttribute('aria-hidden', 'true');
    span.appendChild(markBtnComplete);

    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa fa-trash';
    deleteBtn.setAttribute('aria-hidden', 'true');
    span.appendChild(deleteBtn);
    

    // Event listeners;
    markBtnComplete.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      populateTodoList(todos);
      saveData();
    });
    deleteBtn.addEventListener('click', () =>{
      todos.splice(index, 1);
      populateTodoList(todos);
      saveData();
    });

    // Append elements to the parent elements
    listItem.appendChild(span);
    list.appendChild(listItem);
  });

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let inputValue = inputEl.value.trim();

  if (inputValue !== '') {
    todos.push({task: inputValue, completed: false});
    populateTodoList(todos);
    saveData();
    inputEl.value = '';
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
  saveData()
}
function saveData(){
  localStorage.setItem("data", JSON.stringify(todos));
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    todos = JSON.parse(saveData);
    populateTodoList(todos);
  }
}

form.addEventListener('submit', addNewTodo);
removeBtn.addEventListener('click', deleteAllCompletedTodos);
populateTodoList(todos);


