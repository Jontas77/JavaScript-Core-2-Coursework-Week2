function listOfColours(colours) {
  let contentDiv = document.getElementById("content");
  let selectEl = document.createElement("select");
  let paraTag = document.createElement("p");

  contentDiv.appendChild(selectEl);
  contentDiv.appendChild(paraTag);

  colours.forEach((arrayColors) => {
    let optionTag = document.createElement("option");
    selectEl.appendChild(optionTag);
    optionTag.innerHTML = arrayColors;
    selectEl.className = "container";
  });
  
  document.querySelectorAll(".container").forEach((element) => {
    element.addEventListener("click", () => {
      paraTag.innerHTML = `You have selected: ${element.value}`;
      paraTag.style.color = `${element.value}`;
    });
  });
 
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
