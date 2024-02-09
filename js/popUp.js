$(document).ready(function () {
  setTimeout(function () {
    $("#popUpWrapper").fadeIn(1000).css("display", "flex");
  }, 2000);

  $(".popup-close").click(function () {
    $("#popUpWrapper").fadeOut(1000);
  });
});
console.log("its work");
