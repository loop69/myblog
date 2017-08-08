let mob_menu = document.querySelector(".mobile-menu-toggle");
mob_menu.addEventListener("click", function () {
    let nav = document.querySelector('nav');
    if( nav.style.display === "block") {nav.style.display = "none";}
    else {nav.style.display = "block";}
});