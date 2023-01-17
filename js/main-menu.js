(function() {
    const elements = document.querySelectorAll(".main_nav--link");
    const newElements = [];

    for (let i = 0; i < elements.length; i++) {
        newElements.push(elements[i]);
        console.log(elements[i]);

        elements[i].addEventListener("mouseover", (e) => {
            e.target.classList.add("is-hover");
            console.log(e.target);
        });

        elements[i].addEventListener("mouseout", (e) => {
            e.target.classList.remove("is-hover");
            console.log(e.target);
        });
    }
})();
