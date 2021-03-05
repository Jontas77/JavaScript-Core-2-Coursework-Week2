const jumboEl = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".buttons a");
const volunteerBtn = document.querySelector(".btn-secondary");
const blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");

const form = document.getElementsByTagName('form');
const submitBtn = document.querySelector("form .btn-primary");
const emailInput = document.getElementById("exampleInputEmail1");
const nameInput = document.getElementById("example-text-input");
const textInput = document.getElementById("exampleTextarea");

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
//   if ( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
//     return true;
//   } else {
//   alert("You have entered an invalid email address!");
//     return false;
//   }
// };

// const required = () => {
    
//   if (emailInput.value == 0 ) {
//     e.preventDefault();
//     alert('field is empty');
//     return false;
//   } else {
//     alert("Code has accepted : you can try another");
//     return true;
//   }
// };


// submitBtn.addEventListener('click', () => {
//     event.preventDefault();
   
//     valid = true;
//     if ( emailInput.value > 0) {
//         valid = true;
//     }

//     return valid;
// });

// function checkForm(form)
// {
//     event.preventDefault();
//   // validation fails if the input is blank
//   if(emailInput.value == "" && nameInput.value == "" && textInput.value == "") {
//     alert("Error: Input is empty!");
//     emailInput.focus();
//     return false;
//   }

//   // regular expression to match only alphanumeric characters and spaces
//   var re = /^[\w ]+$/;

//   // validation fails if the input doesn't match our regular expression
//   if(!re.test(emailInput.value)) {
//     alert("Error: Input contains invalid characters!");
//     form.inputfield.focus();
//     return false;
//   }

//   // validation was successful
//   return true;
// }

// function validateForm(event) {
//     event.preventDefault()
//     var x = document.forms['myForm']['fname'].value;
//     if (x == "" || x == null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }