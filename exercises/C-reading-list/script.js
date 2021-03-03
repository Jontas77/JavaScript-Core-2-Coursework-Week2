function readingList(books) {
  let contentDiv = document.getElementById('content');
  let orderList = document.createElement('ul');
  //let liTag = document.createElement('li');
  // let pTag = document.createElement('p');
  let imgTag = document.createElement('img');
  contentDiv.appendChild(orderList);
  orderList.appendChild(liTag);
  // liTag.appendChild(pTag);"data:image/jpeg"
 // liTag.appendChild(imgTag);
  
  for (let i = 0; i < books.length; i++) {
   orderList.innerHTML += `<li><p>${books[i].title} - ${books[i].author}</p></li>`;
    
  }

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);