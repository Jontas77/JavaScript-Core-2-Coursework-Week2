const jumboEl = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".buttons a");
const volunteerBtn = document.querySelector(".btn-secondary");
const blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");

const form = document.getElementsByTagName("form");
const submitBtn = document.querySelector("form .btn-primary");
const emailInput = document.getElementById("exampleInputEmail1").value;
const nameInput = document.getElementById("example-text-input").value;
// const textInput = document.getElementById("exampleTextarea").value;

blueBtn.addEventListener("click", () => {
  jumboEl.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", () => {
  jumboEl.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

greenBtn.addEventListener("click", () => {
  jumboEl.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

// const validateEmail = () => {
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       emailInput.value
//     )
//   ) {
//     return false;
//   } else {
//     alert("You have entered an invalid email address!");
//     return true;
//   }
// };

function validateForm(e) {
  e.preventDefault();
  let textInput = document.getElementById("exampleTextarea").value;

  if(textInput == "" || textInput == null ) {
    //document.getElementById("exampleInputEmail1").style.backgroundColor = "red";
    //document.getElementById("example-text-input").style.backgroundColor = "red";
    textInput.style.backgroundColor = "red";
    alert("Name must be filled out");
    return false;
  }
}


// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (emailInput.value == "") {
//     emailInput.style.backgroundColor = "red";
//     return false;
//   } else if (nameInput.value == "") {
//     nameInput.style.backgroundColor = "red";
//     return false;
//   } else if (textInput.value == "") {
//     textInput.style.backgroundColor = "red";
//     return false;
//   } else {
//     return true;
//   }
// });
