function showMenu() {
    $("#menu-toggle").show();
    $("#app").css("overflowY", "hidden");
    $("#menu-toggle").css({ "overflow": "scroll", "height": "100vh" });
}

function hideMenu() {
    $("#menu-toggle").hide();
    $("#app").css("overflowY", "auto");
}

$("#menu-toggle li.chose").click(function() {
    $("#menu-toggle .sub-menu").not($(this).find(".sub-menu")).hide();
    $("#menu-toggle .fa-chevron-down").not($(this).find(".fa-chevron-down")).css("transform", "rotate(0deg)");
    $(this).find(".sub-menu").toggle();
    if ($(this).find(".sub-menu").css("display") === "block") {
        $(this).find(".fa-chevron-down").css("transform", "rotate(180deg)");
    } else {
        $(this).find(".fa-chevron-down").css("transform", "rotate(0deg)");
    }
})