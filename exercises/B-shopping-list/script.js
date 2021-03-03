function shoppingList(groceries) {
  let contentDiv = document.getElementById("content");
  let orderList = document.createElement("ul");
  contentDiv.appendChild(orderList);

  for (let i = 0; i < groceries.length; i++) {
    console.log((orderList.innerHTML += `<li>${groceries[i]}</li>`));
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
