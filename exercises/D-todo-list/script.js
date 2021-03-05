function todoList(todos) {
  let contentDiv = document.getElementById('content');
  let ulTag = document.createElement('ul');
  contentDiv.appendChild(ulTag);
  
  todos.forEach(element => {
    let liTag = document.createElement('li');
    ulTag.appendChild(liTag);
    liTag.className = 'todoList';
    liTag.innerHTML = `${element.todo}`;
  });

  document.querySelectorAll('.todoList').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('line-through');
    });
  });
  
  };

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);