// Boton para cambiar de modo oscuro a claro
const modo_oscuro = document.querySelector("#cambio_id");

// La detección del navegador si windows esta configurado con modo oscuro o claro
const config = window.matchMedia("(prefers-color-scheme: dark)");

// Item de la configuración que guardará el navegador (Clave)
const localConfig = localStorage.getItem("modo");

// Condición del valor del local storage si es oscuro o claro
if (localConfig === "dark") {
  document.body.classList.toggle("cambio_oscuro");
} else if (localConfig === "light") {
  document.body.classList.toggle("cambio_claro");
}

// Evento click, cuando se oprima el boton del modo oscuro
modo_oscuro.addEventListener("click", () => {
  let tema;

  if (config.matches) {
    document.body.classList.toggle("cambio_claro");
    tema = document.body.classList.contains("cambio_claro") ? "light" : "dark";
  } else {
    document.body.classList.toggle("cambio_oscuro");
    tema = document.body.classList.contains("cambio_oscuro") ? "dark" : "light";
  }

  localStorage.setItem("modo", tema);
});

//------------------------------------------------------------------------------------------------//
