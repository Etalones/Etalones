(function ($) {
  (function initIsotope() {
    $(window).on("load", function () {
      // init Isotope
      var $grid = $(".grid").isotope({
        layoutMode: "fitRows",
        fitRows: {
          gutter: 4,
        },
      });

      // filter items on button click
      $(".list-cat").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        // check active item tag
        $(this).addClass("active").siblings().removeClass("active");
      });
    });
  })();
})(jQuery);
