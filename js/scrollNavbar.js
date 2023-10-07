window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("backgroundGr");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("backgroundGr");
  }
});
window.addEventListener("scroll", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("customItem1");
      navbar.classList.remove("customItem");
    } else {
      navbar.classList.remove("customItem1");
      navbar.classList.add("customItem");
    }
  });
});
