const dice = document.querySelector(".dice");

dice.addEventListener("click", () => {
  dice.classList.toggle("rotate");
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
