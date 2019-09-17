const letters = document.querySelectorAll(".letter");

let delay = 0;

letters.forEach(letter => {
  delay += 100;

  letter.setAttribute("style", `animation-delay: ${delay}ms`);
});
