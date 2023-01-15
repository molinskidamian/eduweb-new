(function () {
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {
        console.log("click");
        // const closeBtn = document.createElement("img");
        // closeBtn.setAttribute("src", "./assets/mobile-menu/times-solid.svg");
        // closeBtn.setAttribute("alt", "Zamknij menu");
        // // menuBtn.innerHTML = closeBtn;
        // menuBtn.innerHTML = closeBtn;
        // console.log(closeBtn);
        const closeBtn = new Image();
        closeBtn.setAttribute("src", "./assets/mobile-menu/times-solid.svg");
        closeBtn.setAttribute("alt", "Zamknij menu");

        let close = true;

        if (close == true) {
            menuBtn.textContent = "";
            menuBtn.appendChild(closeBtn);
            close = false;
            console.log(close);
        } else {
            menuBtn.textContent = "";
            menuBtn.textContent = "Menu";
            // menuBtn.removeChild(closeBtn);
            close = true;
            console.log(close);
        }
    });
})();
