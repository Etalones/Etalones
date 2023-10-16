// JavaScript для управления видимостью содержимого при выборе пункта в меню
const dropdownMenu = document.querySelector(".dropdown-menu");
const tabContent = document.querySelectorAll(".tab-content .tab-pane");

dropdownMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-item")) {
    const targetTab = event.target.getAttribute("href").substring(1); // Получить идентификатор вкладки
    tabContent.forEach((tab) => {
      tab.classList.remove("show", "active");
    });
    document.getElementById(targetTab).classList.add("show", "active");
  }
});
