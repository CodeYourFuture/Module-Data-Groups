 const list = document.createElement("ol");
 list.id = "todo-list";
 document.body.appendChild(list);


 let todos = [
   { task: "Wash the dishes", completed: false },
   { task: "Do the shopping", completed: false }
 ];

 function populateTodoList(todos) {
   list.innerHTML = ""; 

   todos.forEach((todo) => {
     const li = document.createElement("li");
     li.textContent = todo.task;

     if (todo.completed) {
       li.style.textDecoration = "line-through";
     }

     
     const completedBtn = document.createElement("button");
     completedBtn.textContent = "✔";
     completedBtn.addEventListener("click", () => {
       todo.completed = !todo.completed;
       populateTodoList(todos);
     });

 
     const deletedBtn = document.createElement("button");
     deletedBtn.textContent = "🗑️";
     deletedBtn.addEventListener("click", () => {
       todos = todos.filter((t) => t !== todo);
       populateTodoList(todos);
     });

     li.appendChild(completedBtn);
     li.appendChild(deletedBtn);
     list.appendChild(li);
   });
 }


 populateTodoList(todos);


 const input = document.querySelector('input[type="text"]');
 const form = document.querySelector("form");
 form.addEventListener("submit", function addNewTodo(event) {
   event.preventDefault();

   const taskText = input.value.trim();
   if (taskText === "") {
     alert("Enter todo!");
     return;
   }

   const newTodo = { task: taskText, completed: false };
   todos.push(newTodo);
   populateTodoList(todos);
   input.value = "";
 });

 const removeAllTodosBtn = document.querySelector("#remove-all-completed");
 removeAllTodosBtn.addEventListener("click", function deleteAllCompletedTodos() {
   todos = todos.filter((todo) => !todo.completed);
   populateTodoList(todos);
 });