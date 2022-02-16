let mobile_menu = document.getElementById("mobile-menu");
let menu_icon = document.getElementById("menu-icon");
let close_menu = document.getElementById("close-menu");
menu_icon.addEventListener("click", () => {
  mobile_menu.style.left = "0";
});
close_menu.addEventListener("click", () => {
  mobile_menu.style.left = "-100%";
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    stagePadding: 0,
    items: 1,
    loop: true,
    margin: 0,
    singleItem: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});
