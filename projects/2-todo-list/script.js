const todoBtn = document.querySelector("button");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const deleteBtn = document.createElement("i");
const completedBtn = document.createElement("i");

function populateTodoList(todos) {
  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoList.appendChild(todoDiv);

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("list-group-item");
  newTodo.classList.add("d-flex");
  newTodo.classList.add("justify-content-between");
  newTodo.classList.add("align-items-center");
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const spanContainer = document.createElement("span");
  spanContainer.classList.add("badge");
  spanContainer.classList.add("bg-primary");
  spanContainer.classList.add("rounded-pill");
  newTodo.appendChild(spanContainer);

  
  completedBtn.classList.add("fa");
  completedBtn.classList.add("fa-check");
  completedBtn.classList.add("checkBtn");
  spanContainer.appendChild(completedBtn);

  
  deleteBtn.classList.add("fa");
  deleteBtn.classList.add("fa-trash");
  deleteBtn.classList.add("trashBtn");
  spanContainer.appendChild(deleteBtn);

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// todoBtn.addEventListener("click", addNewTodo);
deleteBtn.addEventListener('click', deleteTodo);
completedBtn.addEventListener('click', completedTodo)
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
  populateTodoList(todos);
  todoInput.value = "";
}



function deleteTodo(e) {
  let item = this.parentNode;
  let ul = item.parentNode;
  ul.remove();
}

function completedTodo(e) {
  let item = this.parentNode;
  let ul = item.parentNode;
  ul.classList.toggle('completed');
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
