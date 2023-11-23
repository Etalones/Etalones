// document.querySelectorAll(".dropdown-submenu").forEach(function (item) {
//   item.addEventListener("mouseover", function () {
//     const dropdownMenu = item.querySelector(".dropdown-menu");
//     dropdownMenu.classList.add("show");
//     dropdownMenu.style.opacity = "1";
//   });

//   item.addEventListener("mouseout", function () {
//     const dropdownMenu = item.querySelector(".dropdown-menu");
//     dropdownMenu.classList.remove("show");
//     dropdownMenu.style.opacity = "0";
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".burgerMenu");
  const close = document.querySelector("#close__burger");
  const navigationMenu = document.querySelector("#burgermenu");

  close.addEventListener("click", function (event) {
    event.stopPropagation();
    closeMenu();
  });

  // Добавляем обработчик для элементов меню, чтобы предотвратить всплытие события
  navigationMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  function closeMenu() {
    navigationMenu.style.opacity = 0;
    navigationMenu.style.visibility = "hidden";
    document.removeEventListener("click", closeMenu);

    // Восстанавливаем прокрутку при закрытии меню
    document.body.style.overflow = "auto";
  }

  burgerMenuButton.addEventListener("click", function () {
    navigationMenu.style.opacity = 1;
    navigationMenu.style.visibility = "visible";

    // Отключаем плавность прокрутки при открытии меню
    document.body.style.overflow = "hidden";
    document.body.style.scrollBehavior = "auto";

    setTimeout(function () {
      document.addEventListener("click", closeMenu);

      // Восстанавливаем плавность прокрутки через небольшую задержку
      setTimeout(function () {
        document.body.style.scrollBehavior = "smooth";
      }, 100);
    }, 100);
  });

  // Показываем меню после загрузки страницы
  navigationMenu.style.opacity = 1;
  navigationMenu.style.visibility = "visible";

  // Закрываем меню при загрузке страницы
  closeMenu();
});
