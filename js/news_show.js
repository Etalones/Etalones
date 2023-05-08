let hello = "hello world";
console.log(hello)

$(document).ready(() => {
  $("#burger__menu").click(function () {
    $("#slider").toggleClass("show");
  });
  $("#close__burger").click(function () {
    $("#slider").toggleClass("show");
  });
  $(".header__menu a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 650, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );

    return false;
  });
  $(".spjnz a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 650, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );
    $("#slider").removeClass("show");
    return false;
  });
  $(".practice__body a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 650, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );
    $("#slider").removeClass("show");
    return false;
  });
  $(".services a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 650, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );
    $("#slider").removeClass("show");
    return false;
  });

  $(".menu__list-slide a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 75,
      },
      {
        duration: 650, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );
    $("#slider").removeClass("show");
    return false;
  });
});