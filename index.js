const navToogle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu-visible")){
        navToogle.setAttribute("aria-label", "Cerrar menu");
    } else {
        navToogle.setAttribute("aria-label", "Abrir menu");
    }
});