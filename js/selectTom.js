// --------------------------------------------
document.querySelectorAll(".dropdown-submenu").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    item.querySelector(".dropdown-menu").classList.add("show");
  });

  item.addEventListener("mouseout", function () {
    item.querySelector(".dropdown-menu").classList.remove("show");
  });
});

// ------------------------------------------------------------
$(document).ready(function () {
  $("#show-all-button").click(function () {
    $(".card").fadeIn();
  });

  $("#show-new-button").click(function () {
    $(".card.border-0").fadeOut(400, function () {
      $(this).css("margin", "0");
      $(".card:has(.new)").fadeIn();
    });
  });

  $("#show-electr-button").click(function () {
    $(".card.border-0").fadeOut(400, function () {
      $(this).css("margin", "0");
      $(".card:has(.electr)").fadeIn();
    });
  });

  $("#show-vnutr-button").click(function () {
    $(".card.border-0").fadeOut(400, function () {
      $(this).css("margin", "0");
      $(".card:has(.vnutr)").fadeIn();
    });
  });

  $("#show-naruj-button").click(function () {
    $(".card.border-0").fadeOut(400, function () {
      $(this).css("margin", "0");
      $(".card:has(.naruj)").fadeIn();
    });
  });

  // Проверяем, есть ли параметр "show-new" в URL
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("show-new")) {
    $(".card.border-0").fadeOut(400, function () {
      $(this).css("margin", "0");
      $(".card:has(.new)").fadeIn();
    });
  }
});

// ---------------------------------------------------------
