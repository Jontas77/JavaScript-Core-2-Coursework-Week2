function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
 
  for (let i = 0; i < arrayOfPeople.length; i++) {
    content.innerHTML += `<h1> ${arrayOfPeople[i].name} </h1>`;
    content.innerHTML += `<h2> ${arrayOfPeople[i].job} </h2>`;
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

