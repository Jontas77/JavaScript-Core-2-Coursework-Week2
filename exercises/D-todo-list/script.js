function todoList(todos) {
  let contentDiv = document.getElementById('content');
  let ulTag = document.createElement('ul');
  contentDiv.appendChild(ulTag);
  let liTag1 = document.createElement('li');
  let liTag2 = document.createElement('li');
  let liTag3 = document.createElement('li');
  let liTag4 = document.createElement('li');
  ulTag.appendChild(liTag1);
  ulTag.appendChild(liTag2);
  ulTag.appendChild(liTag3);
  ulTag.appendChild(liTag4);




  // for (let i = 0; i < todos.length; i++) {
  //   ulTag.innerHTML += `<li>${todos[i].todo}</li>`;
  // }
  liTag1.innerHTML = `${todos[0].todo}`;
  liTag2.innerHTML = `${todos[1].todo}`;
  liTag3.innerHTML = `${todos[2].todo}`;
  liTag4.innerHTML = `${todos[3].todo}`;

  liTag1.addEventListener( 'click', () => {
    if (liTag1.setAttribute('style', 'text-decoration: line-through')) {
      liTag1.removeAttribute('style');
    }
  }); 
    liTag2.addEventListener( 'click', () => {
      if (liTag2.setAttribute('style', 'text-decoration: line-through')) {
        liTag2.removeAttribute('style');
      }
    });
      liTag3.addEventListener( 'click', () => {
        if (liTag3.setAttribute('style', 'text-decoration: line-through')) {
          liTag3.removeAttribute('style');
        }
      });
        liTag4.addEventListener( 'click', () => {
          if (liTag4.setAttribute('style', 'text-decoration: line-through')) {
            liTag4.removeAttribute('style');
          }
        });
  //  if (liTag1.style.textDecoration = 'none') {
  //    return liTag1.style.textDecoration = 'line-through';
  //  } else {
  //    return liTag1.style.textDecoration = 'none';
  //  }
  
  };

  

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);