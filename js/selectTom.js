document.querySelectorAll(".dropdown-submenu").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    showDropdown(dropdownMenu);
  });

  item.addEventListener("mouseout", function () {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    hideDropdown(dropdownMenu);
  });

  // Добавим обработчик клика для мобильных устройств
  item.addEventListener("click", function (event) {
    const dropdownMenu = item.querySelector(".dropdown-menu");

    if (!isMobile()) {
      // Если не мобильное устройство, покажем/скроем меню при наведении
      showDropdown(dropdownMenu);
    } else {
      // Если мобильное устройство, предотвратим переход по ссылке
      event.preventDefault();

      // Переключим видимость меню при клике
      toggleDropdown(dropdownMenu);
    }
  });
});

// Добавим функции для управления видимостью меню
function showDropdown(dropdownMenu) {
  dropdownMenu.classList.add("show");
  dropdownMenu.style.opacity = "1";
}

function hideDropdown(dropdownMenu) {
  dropdownMenu.classList.remove("show");
  dropdownMenu.style.opacity = "0";
}

function toggleDropdown(dropdownMenu) {
  if (dropdownMenu.classList.contains("show")) {
    hideDropdown(dropdownMenu);
  } else {
    showDropdown(dropdownMenu);
  }
}

// Добавим функцию для проверки, является ли устройство мобильным
function isMobile() {
  return window.innerWidth <= 767; // Измените значение, если необходимо
}
