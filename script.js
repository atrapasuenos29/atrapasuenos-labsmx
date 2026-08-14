// Animación suave al cargar la página
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Resaltar la opción activa del menú
const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(enlace => {
    if (enlace.href === window.location.href) {
        enlace.classList.add("activo");
    }
});

// Botón volver arriba
const botonArriba = document.createElement("button");
botonArriba.innerHTML = "↑";
botonArriba.id = "btnArriba";
document.body.appendChild(botonArriba);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonArriba.classList.add("mostrar");
    } else {
        botonArriba.classList.remove("mostrar");
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});