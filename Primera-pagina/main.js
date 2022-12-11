ScrollReveal().reveal(".contenedor", { delay: 500 });
ScrollReveal().reveal(".barra", { delay: 500 });
ScrollReveal().reveal(".sub-barra", { delay: 500 });
ScrollReveal().reveal(".tit", { delay: 500 });
ScrollReveal().reveal(".sub", { delay: 500 });
ScrollReveal().reveal(".text", { delay: 500 });
ScrollReveal().reveal(".imagen", { delay: 500 });

// Tema
const body = document.body;
const encabezadoTema = document.querySelector(".encabezado__tema");
const contenedorTema = document.querySelector(".contenedor__tema");
const contenedorTemaPrincipal = document.getElementById("tema-principal");
const contenedorTemaSecundario = document.getElementById("tema-secundario");
const textoEncabezadoTema = document.querySelector(".encabezado__tema--texto");
const contenedorBtnTemaPrincipal = document.querySelector(
  ".contenedor__tema--menu-principal"
);
const contenedorBtnTemaSecundario = document.querySelector(
  ".contenedor__tema--menu-secundario"
);
const contenedorTexto = document.querySelector(".contenedor");
const barra = document.querySelector(".barra");

// Botones tema
const btnTemaClaro = document.getElementById("claro");
const btnTemaOscuro = document.getElementById("oscuro");
const btnTemaAmarillo = document.getElementById("amarillo");
const btnTemaRojo = document.getElementById("rojo");
const btnTemaAzul = document.getElementById("azul");

let claro = false;
let oscuro = true;

// Aparecer contenedor tema
encabezadoTema.addEventListener("mouseenter", () => {
  contenedorTema.style.animation = "tema-aparecer .5s forwards";
  contenedorTemaPrincipal.style.animation = "tema-aparecer .5s forwards";
  contenedorTemaSecundario.style.animation = "tema-aparecer .5s forwards";
  textoEncabezadoTema.style.color = "var(--amarillo)";
  contenedorTema.style.display = "flex";
});
encabezadoTema.addEventListener("mouseleave", () => {
  if ((claro == false) & (oscuro == true)) {
    textoEncabezadoTema.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    textoEncabezadoTema.style.color = "var(--negro)";
  }
  contenedorTema.style.display = "none";
});
// Tema principal
contenedorTemaPrincipal.addEventListener("mouseover", () => {
  contenedorBtnTemaPrincipal.style.zIndex = "1000";
  contenedorBtnTemaPrincipal.style.display = "flex";
  if ((claro == false) & (oscuro == true)) {
    contenedorTemaPrincipal.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    contenedorTemaPrincipal.style.color = "var(--negro)";
  }
});
contenedorTemaPrincipal.addEventListener("mouseenter", () => {
  contenedorTemaPrincipal.style.opacity = "0";
  contenedorTemaPrincipal.style.color = "transparent";
  contenedorTemaPrincipal.style.zIndex = "-1";
  contenedorBtnTemaPrincipal.style.display = "flex";
});
contenedorBtnTemaPrincipal.addEventListener("mouseenter", () => {
  contenedorTemaPrincipal.style.opacity = "0";
  contenedorTemaPrincipal.style.color = "transparent";
  contenedorTemaPrincipal.style.zIndex = "-1";
  contenedorBtnTemaPrincipal.style.display = "flex";
});
contenedorBtnTemaPrincipal.addEventListener("mouseleave", () => {
  contenedorTemaPrincipal.style.opacity = "1";
  contenedorTemaPrincipal.style.color = "#fff";
  contenedorTemaPrincipal.style.zIndex = "300";
  contenedorBtnTemaPrincipal.style.display = "none";
  if ((claro == false) & (oscuro == true)) {
    contenedorTemaPrincipal.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    contenedorTemaPrincipal.style.color = "var(--negro)";
  }
});
contenedorTemaPrincipal.addEventListener("mouseleave", () => {
  contenedorTemaPrincipal.style.opacity = "1";
  contenedorTemaPrincipal.style.color = "#fff";
  contenedorBtnTemaPrincipal.style.display = "none";
  if ((claro == false) & (oscuro == true)) {
    contenedorTemaPrincipal.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    contenedorTemaPrincipal.style.color = "var(--negro)";
  }
});
// Tema secundario

contenedorTemaSecundario.addEventListener("mouseenter", () => {
  contenedorTemaSecundario.style.opacity = "0";
  contenedorTemaSecundario.style.color = "transparent";
  contenedorBtnTemaSecundario.style.display = "flex";
});
contenedorTemaSecundario.addEventListener("mouseleave", () => {
  contenedorTemaSecundario.style.opacity = "1";
  contenedorTemaSecundario.style.color = "#fff";
  contenedorBtnTemaSecundario.style.display = "none";
  if ((claro == false) & (oscuro == true)) {
    contenedorTemaSecundario.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    contenedorTemaSecundario.style.color = "var(--negro)";
  }
});
contenedorBtnTemaSecundario.addEventListener("mouseenter", () => {
  contenedorTemaSecundario.style.opacity = "0";
  contenedorTemaSecundario.style.color = "transparent";
  contenedorTemaSecundario.style.zIndex = "-1";
  contenedorBtnTemaSecundario.style.display = "flex";
  contenedorBtnTemaSecundario.style.zIndex = "300";
});
contenedorBtnTemaSecundario.addEventListener("mouseleave", () => {
  contenedorTemaSecundario.style.opacity = "1";
  contenedorTemaSecundario.style.color = "";
  contenedorTemaSecundario.style.zIndex = "300";
  contenedorBtnTemaSecundario.style.display = "none";
  if ((claro == false) & (oscuro == true)) {
    contenedorTemaSecundario.style.color = "#fff";
  }
  if ((oscuro == false) & (claro == true)) {
    contenedorTemaSecundario.style.color = "var(--negro)";
  }
});

// Cambiar tema principal
const encabezado = document.querySelector(".encabezado");
const pie = document.querySelector(".pie");
const menuNav = document.querySelector(".menu__nav");
const text = document.querySelectorAll(".texto");
const textSinSombra = document.querySelectorAll(".textosinsombra");
const textTemaSub = document.querySelectorAll(".sub");

// Acción tema claro

function cambiarTemaClaro(tema, tema2) {
  encabezadoTema.style.backgroundColor = `${tema}`;
  encabezadoTema.style.backgroundColor = `${tema}`;
  contenedorTema.style.backgroundColor = `${tema}`;
  contenedorBtnTemaPrincipal.style.backgroundColor = `${tema}`;
  contenedorBtnTemaSecundario.style.backgroundColor = `${tema}`;
  contenedorTemaPrincipal.style.backgroundColor = `${tema}`;
  contenedorTemaSecundario.style.backgroundColor = `${tema}`;
  encabezado.style.backgroundColor = `${tema}`;
  pie.style.backgroundColor = `${tema}`;
  menuNav.style.backgroundColor = `${tema}`;

  body.style.backgroundColor = `${tema}`;
  text.forEach((item) => {
    item.style.color = `${tema2}`;
  });
  textTemaSub.forEach((item) => {
    item.style.color = `${tema2}`;
  });
}

btnTemaClaro.addEventListener("click", () => {
  cambiarTemaClaro("var(--blanco)", "var(--negro)");
  claro = true;
  oscuro = false;
});
// Acción tema oscuro
btnTemaOscuro.addEventListener("click", () => {
  cambiarTemaClaro("var(--verde)", "#fff");
  claro = false;
  oscuro = true;
});

// Cambiar tema secundario
const steam = document.getElementById("stm");
const textTema = document.getElementById("tema");
const img = document.querySelectorAll(".img");
const textoCorreo = document.querySelectorAll(".correo");
const contacto = document.querySelector(".pie__div");

function cambiarBordeTema(tema) {
  encabezado.style["borderBottom"] = `2px solid ${tema}`;
  btnTemaOscuro.style.border = `1px solid ${tema}`;
  btnTemaClaro.style.border = `1px solid ${tema}`;
  contenedorTema.style.border = `1px solid ${tema}`;
  contenedorTema.style["boxShadow"] = `0px 0px 6px ${tema}`;
  contenedorTexto.style.border = `1px solid ${tema}`;
  contenedorTexto.style["boxShadow"] = `0px 0px 15px solid ${tema}`;
  barra.style.border = `1px solid ${tema}`;
  barra.style["boxShadow"] = `0px 0px 15px solid ${tema}`;
  pie.style["borderTop"] = `5px solid ${tema}`;
  img.forEach((item) => {
    item.style["filter"] = `drop-shawdow(0px 0px 7px ${tema})`;
  });
  textTemaSub.forEach((item) => {
    item.style["textShadow"] = `0px 0px 5px ${tema}`;
  });
  text.forEach((item) => {
    item.style["textShadow"] = `3px 3px 5px ${tema}`;
  });
}

function cambiarFondoTema(fondo) {
  if ((claro == false) & (oscuro == true)) {
    body.style.backgroundColor = "var(--verde)";
    body.style.backgroundImage = `${fondo}`;
  }
  if ((oscuro == false) & (claro == true)) {
    body.style.backgroundColor = "var(--blanco)";
    body.style.backgroundImage = `${fondo}`;
  }
}

const textNav = document.querySelectorAll(".textnav");
function cambiarTextoNav(tema) {
  textNav.forEach((item) => {
    item.style["textShadow"] = "none";
    item.addEventListener("mouseenter", () => {
      item.style.color = `${tema}`;
      textTema.style["borderBottom"] = "none";
    });
    item.addEventListener("mouseleave", () => {
      if ((claro == false) & (oscuro == true)) {
        item.style.color = "#fff";
      }
      if ((oscuro == false) & (claro == true)) {
        item.style.color = "var(--negro)";
      }
    });
  });
  textSinSombra.forEach((item) => {
    item.style["textShadow"] = "none";
  });
  textoCorreo.forEach((item) => {
    item.style.color = `${tema}`;
  });
  contacto.style["borderRight"] = `3.5ox solid ${tema}`;
}

btnTemaRojo.addEventListener("click", () => {
  cambiarFondoTema("var(--fondo-rojo)");
  cambiarBordeTema("var(--rojo)");
  cambiarTextoNav("var(--rojo)");
});

btnTemaAzul.addEventListener("click", () => {
  cambiarFondoTema("var(--fondo-azul)");
  cambiarBordeTema("var(--azul)");
  cambiarTextoNav("var(--azul)");
});

btnTemaAmarillo.addEventListener("click", () => {
  cambiarFondoTema("var(--fondo-amarillo)");
  cambiarBordeTema("var(--amarillo)");
  cambiarTextoNav("var(--amarillo)");
});

// Menu movil
const menuIcono = document.querySelector(".icono-menu");

menuIcono.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu");
  menu.style.animation = "desaparecer-movil 1s forwards";
});

const navIcono = document.querySelector(".icono-nav");

navIcono.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu");
  menu.style.animation = "aparecer-movil 1s forwards";
});
