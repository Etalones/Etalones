$("#btn-popup").click(()=> {
        $(".popup").fadeIn(700);
        $(".popup").css("display", "flex");
        $("body").css("overflow-y", "hidden");
})

$("#btn-close, #cancel").click(()=> {
    $(".popup").fadeOut(500, function() {
        $(".popup").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
})

$("#btn-popup1").click(()=> {
        $(".popup").fadeIn(700);
        $(".popup").css("display", "flex");
        $("body").css("overflow-y", "hidden");
})

$("#btn-close, #cancel").click(()=> {
    $(".popup").fadeOut(500, function() {
        $(".popup1").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
})


