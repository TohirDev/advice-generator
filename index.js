const dice = document.querySelector(".dice");
const toggleBtn = document.querySelector(".toggle-btn");
let adviceId = document.getElementById("id");
let adviceText = document.getElementById("text");
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
});

dice.addEventListener("click", () => {
  dice.classList.toggle("rotate");
  fetchData();
});

const displayRandomAdvice = (data) => {
  adviceId.innerText = `#${data.slip.id}`;
  adviceText.innerText = data.slip.advice;
};

const fetchData = () => {
  adviceId.innerText = "...";
  adviceText.innerText = "Loading...";
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => displayRandomAdvice(data));
};
