document.addEventListener("DOMContentLoaded", function () {
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    toggleIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const answer = icon.parentElement.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.classList.remove("toggle-active");
            } else {
                answer.style.display = "block";
                icon.classList.add("toggle-active");
            }
        });
    });
});
