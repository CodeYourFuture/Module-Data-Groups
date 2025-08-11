let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let count = 0;
  for(let todo in todos){
    count++;
    list.innerHTML += `<li id=${count}-todo>${todos[todo].task}. <input id=${count}-check type="checkbox" class="check-list"}> <button type="">🗑️</button></li>`;
  }
}


document.getElementById("submit").addEventListener("click", addNewTodo);
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
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
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let new_obj = {};
  let input_text = document.querySelector("#input-text");
  new_obj.task = input_text.value;
  new_obj.completed = false;
  todos.push(new_obj);
  list.innerHTML = "";
  populateTodoList(todos);

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {

  // Filter out completed todos and update the array
  todos = todos.filter((todo, index) => {
    const checkbox = document.getElementById(`${index + 1}-check`);
    return !checkbox.checked; // Keep the todo if not checked
  });

  // Clear the current todo list in the DOM
  list.innerHTML = "";

  // Re-populate the list with remaining todos
  populateTodoList(todos);

  // // Write your code here...
  // var elements = document.getElementById('todo-list');
  // var todos_checkboxes = elements.getElementsByTagName('input'); // we use this to get the value of the checkbox
  // var li_elements = elements.getElementsByTagName('li'); // we use this to get name of task in the html
  // console.log(elements);
  // console.log(todos_checkboxes);

  // for (check of todos_checkboxes){
  //   console.log(check.id);
  //   var is_checked = document.getElementById(check.id).checked;
  //   console.log("is checked" + is_checked);
  //   for(todo of todos){
  //     var name = todo.task;
  //     for(li_elem of li_elements){
  //       var name_task = li_elem.innerHTML.split('.')[0];
  //       if (is_checked && name == name_task){
  //         console.log(name_task + ' is checked and in the list');
  //       }
  //     }
  //   }
  //     }

  }

  // delete from array




