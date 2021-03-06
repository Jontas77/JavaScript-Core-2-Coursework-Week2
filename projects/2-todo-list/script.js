function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let span = document.createElement("span");
  span.classList.add("todo");
  let newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  list.appendChild(newTodo);
  newTodo.appendChild(span);

  let completedBtn = document.createElement("span");
  completedBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
   completedBtn.classList.add("badge");
   completedBtn.classList.add("bg-primary");
   completedBtn.classList.add("rounded-pill");
  span.appendChild(completedBtn);

  let deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = ' <i class="fa fa-trash" aria-hidden="true"></i>';
  deleteBtn.classList.add("badge");
  deleteBtn.classList.add("bg-primary");
  deleteBtn.classList.add("rounded-pill");
  span.appendChild(deleteBtn);

  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
let todoBtn = document.querySelector("button");
todoBtn.addEventListener("click", addNewTodo);
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
