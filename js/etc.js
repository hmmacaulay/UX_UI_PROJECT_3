// $(function() {
//     $('.nav_bar').load('../nav.html')
// });
// $(document).ready(function() {
//     // var nav_bar = $(nav_bar).html("")
//     $("#nav_bar").load("../nav.html")  
// });

// $(document).ready(function() {
//     $("#nav_bar").load("../nav.html #hi");
// });

$("#nav_bar").load("../nav.html");

$(".nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });