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


// Name input
const nameSubmit = () => {
  if(nameInput.value === '') {
    return nameInput.classList.toggle('invalid');
  } else {
    return nameInput.classList.remove('invalid');
  }
}
nameSubmit();
