const mobileMenuButton = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const body = document.body;

mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobile-menu");
    mobileMenu.classList.toggle("mobile-menu-open");
    document.querySelector(".mobile-menu-extends").style.display = "flex";
    console.log("lol");
    console.log(mobileMenu.classList);
});
