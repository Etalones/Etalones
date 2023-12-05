// window.addEventListener("scroll", function () {
//   let navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//     navbar.classList.remove("backgroundGr");
//   } else {
//     navbar.classList.remove("scrolled");
//     navbar.classList.add("backgroundGr");
//   }
// });
// window.addEventListener("scroll", function () {
//   let navLinks = document.querySelectorAll(".nav-link");
//   navLinks.forEach(function (navbar) {
//     if (window.scrollY > 50) {
//       navbar.classList.add("customItem1");
//       navbar.classList.remove("customItem");
//     } else {
//       navbar.classList.remove("customItem1");
//       navbar.classList.add("customItem");
//     }
//   });
// });
// Функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Добавляет плавность прокрутки (поддерживается в современных браузерах)
  });
}

// Отслеживание прокрутки и отображение/скрытие кнопки вверх
window.onscroll = function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};





// ----------------------------Carousel--------------------------------------------

// let ul = document.querySelector(".page-main__products-list");
// document.querySelector(".next").addEventListener("click", function () {
//   ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
// });
// document
//   .querySelector(".prev")
//   .addEventListener("click", function () {
//     ul.appendChild(ul.firstElementChild);
//   });

let ul = document.querySelector(".page-main__products-list");

function nextButtonClick() {
  ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
}

document.querySelector(".next").addEventListener("click", nextButtonClick);

document.querySelector(".prev").addEventListener("click", function () {
  ul.appendChild(ul.firstElementChild);
});

// Автоматическое нажатие кнопки "next" каждую секунду
setInterval(nextButtonClick, 3000);





