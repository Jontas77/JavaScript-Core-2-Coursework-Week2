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
      if (item.style.textDecoration = 'none') {
        return item.style.textDecoration = 'line-through';
      } else if (item.style.textDecoration = 'line-through') {
        return item.style.textDecoration = 'none'
      }
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