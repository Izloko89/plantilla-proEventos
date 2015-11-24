$("#menu-toggle-close").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle-open").css("display","block");
});

$("#menu-toggle-open").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle-open").css("display","none");        
});