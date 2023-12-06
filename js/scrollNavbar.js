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
// document.querySelector(".prev").addEventListener("click", function () {
//   ul.appendChild(ul.firstElementChild);
// });

// Получаем ссылку на элемент, в который мы хотим добавить новый элемент
var carouselCSTM = document.querySelector(".page-main__products-list");

// Функция для перемещения вперед
function nextButtonClick() {
  carouselCSTM.insertBefore(
    carouselCSTM.lastElementChild,
    carouselCSTM.firstElementChild
  );
}

// Добавляем обработчик события на кнопку "next"
document.querySelector(".next").addEventListener("click", nextButtonClick);

// Добавляем обработчик события на кнопку "prev"
document.querySelector(".prev").addEventListener("click", function () {
  carouselCSTM.appendChild(carouselCSTM.firstElementChild);
});

// Автоматическое нажатие кнопки "next" каждую секунду
setInterval(nextButtonClick, 3000);

// document.addEventListener("DOMContentLoaded", function () {
//   let carouselCSTM = document.querySelector(".page-main__products-list");

//   if (carouselCSTM) {
//     function nextButtonClick() {
//       carouselCSTM.insertBefore(
//         carouselCSTM.lastElementChild,
//         carouselCSTM.firstElementChild
//       );
//     }

//     document.querySelector(".next").addEventListener("click", nextButtonClick);

//     document.querySelector(".prev").addEventListener("click", function () {
//       carouselCSTM.appendChild(carouselCSTM.firstElementChild);
//     });

//     // Автоматическое нажатие кнопки "next" каждую секунду
//     setInterval(nextButtonClick, 3000);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let carouselCSTM = document.querySelector(".page-main__products-list");

//   if (carouselCSTM) {
//     function moveSlide(forward = true) {
//       const firstSlide = carouselCSTM.firstElementChild;
//       const lastSlide = carouselCSTM.lastElementChild;

//       if (forward) {
//         carouselCSTM.insertBefore(lastSlide, firstSlide);
//       } else {
//         carouselCSTM.appendChild(firstSlide);
//       }
//     }

//     document.querySelector(".next").addEventListener("click", function () {
//       moveSlide();
//     });

//     document.querySelector(".prev").addEventListener("click", function () {
//       moveSlide(false);
//     });

//     // Автоматическое переключение слайдов каждые 3 секунды
//     setInterval(function () {
//       moveSlide();
//     }, 3000);
//   }
// });
console.log("work");





