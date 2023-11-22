document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".burgerMenu");
  const navigationMenu = document.querySelector("#burgermenu");

  burgerMenuButton.addEventListener("click", function () {
    alert("Кнопка была нажата!");
    navigationMenu.classList.toggle("show");
  });
});
