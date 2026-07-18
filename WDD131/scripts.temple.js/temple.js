const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menu.classList.toggle("open");
});

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;