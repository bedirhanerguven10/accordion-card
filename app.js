const button = document.querySelectorAll(".btn-faq-item");

button.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        removeActiveClasses();
        buttons.parentNode.classList.toggle("active");
    });
});

function removeActiveClasses() {
    button.forEach((x) => {
        x.parentNode.classList.remove("active");
    });
}