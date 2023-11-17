document.querySelectorAll(".dropdown-submenu").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("show");
    dropdownMenu.style.opacity = "1";
  });

  item.addEventListener("mouseout", function () {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    dropdownMenu.classList.remove("show");
    dropdownMenu.style.opacity = "0";
  });
});
