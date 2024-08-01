document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const name = document.querySelector(".name");
    const name2 = document.querySelector(".name2");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.add("animate");
        setTimeout(() => {
            button.classList.remove("animate");
            button.style.display = 'none';
            name.style.display = 'block';
            name2.style.display = 'block';
        }, 600);
    });
});
