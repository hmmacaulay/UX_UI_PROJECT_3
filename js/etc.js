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

// $("#nav_bar").load("../nav.html");

// $(".nav-link").on("click", function(){
//     $(".navbar-nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//  });


//   const $dropdown = $(".dropdown");
//   const $dropdownToggle = $(".dropdown-toggle");
//   const $dropdownMenu = $(".dropdown-menu");
//   const showClass = "show";

//   $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 768px)").matches) {
//       $dropdown.hover(
//         function() {
//           const $this = $(this);
//           $this.addClass(showClass);
//           $this.find($dropdownToggle).attr("aria-expanded", "true");
//           $this.find($dropdownMenu).addClass(showClass);
//         },
//         function() {
//           const $this = $(this);
//           $this.removeClass(showClass);
//           $this.find($dropdownToggle).attr("aria-expanded", "false");
//           $this.find($dropdownMenu).removeClass(showClass);
//         }
//       );
//     } else {
//       $dropdown.off("mouseenter mouseleave");
//     }
//   });


function fade() {
    $('.preloader').fadeOut("slow");
    }

function fade_quick() {
    $('.preloader_quick').fadeOut("fast");
    }

    setTimeout(fade, 1800);
    setTimeout(fade_quick, 800);
    
