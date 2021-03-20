const jumboEl = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".buttons a");
const volunteerBtn = document.querySelector(".btn-secondary");
const blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");

const form = document.getElementById("myForm");
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

// Email input field
const emailValidation = () => {
  let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailFormat.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailInput.classList.remove("invalid");
    return false;
  }
}

// Name input field
const nameValidation = () => {
  if(nameInput.value == '' || nameInput.value == null) {
    nameInput.classList.add('invalid');
    return false;
  } else {
    nameInput.classList.remove('invalid');
    return false;
  }
}

// Text input field
const textValidation = () => {
  if (textInput.value == "" || textInput.value == null) {
    textInput.classList.add("invalid");
    return false;
  } else {
    textInput.classList.remove("invalid");
    return false;
  }
}

// Submit
const logSubmit = () => {
  if(emailInput.value !== '' && !nameInput.value !== '' && textInput.value !== '') {
  alert('Thank you for filling out the form'); 
  return false;
  }   
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailValidation();
  nameValidation();
  textValidation();
  logSubmit();
  form.reset();
});


