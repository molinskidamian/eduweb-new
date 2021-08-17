(function () {
    /* Mobile menu */
    const mobileNavExtends = document.querySelector(".mobile-main-nav-extends");
    const mobileNav = document.querySelector(".mobile-main-nav");
    const mobileMenuButton = document.querySelector("#mobile-menu-trigger");

    mobileMenuButton.addEventListener("click", function () {
        console.log("pokaz");
        mobileNavExtends.classList.toggle("mobile-nav--show");
        mobileMainNav = document.querySelector(".mobile-main-nav");
        mobileMainNav.classList.toggle("mobile-nav--show");
        // mobileMainNavWrapper.style.display = "none";
    });
})();
