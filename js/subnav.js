$('.toggleNav').on("click", function (e) {
    // var target = $(e).parent().next().next();
    var target = $(this).parent().next();

    if(target.hasClass("closedNav")){
        target.removeClass("closedNav").addClass("openedNav");
    } else {
        target.removeClass("openedNav").addClass("closedNav");
    }

});
